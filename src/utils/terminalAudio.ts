// Low-fidelity, muted Web Audio API terminal sound synthesizer
// Produces soft, warm mechanical key clicks and return thocks without external audio files.

class TerminalAudioEngine {
  private ctx: AudioContext | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private muted: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hany-terminal-audio-muted");
      this.muted = saved === "true";
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public setMuted(mute: boolean): void {
    this.muted = mute;
    if (typeof window !== "undefined") {
      localStorage.setItem("hany-terminal-audio-muted", String(mute));
    }
  }

  private ensureContext(): AudioContext | null {
    if (this.muted || typeof window === "undefined") return null;

    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();
    }

    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }

    if (!this.noiseBuffer && this.ctx) {
      const sampleRate = this.ctx.sampleRate;
      const length = Math.floor(sampleRate * 0.05); // 50ms noise buffer
      const buffer = this.ctx.createBuffer(1, length, sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < length; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      this.noiseBuffer = buffer;
    }

    return this.ctx;
  }

  /**
   * Plays a soft, muted lo-fi mechanical keystroke click.
   * Slight pitch and filter variation prevents repetitive robotic timbre.
   */
  public playKeyClick(intensity: "soft" | "normal" = "normal"): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.noiseBuffer) return;

    const now = ctx.currentTime;
    const gainScale = intensity === "soft" ? 0.55 : 1.0;

    // 1. Muted tactile noise transient (band-limited + low-pass for lo-fi warmth)
    const noise = ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;

    const bandpass = ctx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.setValueAtTime(1050 + Math.random() * 380, now);
    bandpass.Q.setValueAtTime(1.6, now);

    const lowpass = ctx.createBiquadFilter();
    lowpass.type = "lowpass";
    lowpass.frequency.setValueAtTime(1900 + Math.random() * 300, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.linearRampToValueAtTime(0.048 * gainScale, now + 0.002);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

    noise.connect(bandpass);
    bandpass.connect(lowpass);
    lowpass.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.025);

    // 2. Subtle muted switch-housing thock
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    const startFreq = 135 + Math.random() * 25;
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(62, now + 0.02);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.035 * gainScale, now);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.024);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.026);
  }

  /**
   * Plays a slightly deeper muted Return / Enter key thock.
   */
  public playReturnKey(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.noiseBuffer) return;

    const now = ctx.currentTime;

    const noise = ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;

    const lowpass = ctx.createBiquadFilter();
    lowpass.type = "lowpass";
    lowpass.frequency.setValueAtTime(1250, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.linearRampToValueAtTime(0.055, now + 0.003);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.036);

    noise.connect(lowpass);
    lowpass.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(now);
    noise.stop(now + 0.04);

    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(105, now);
    osc.frequency.exponentialRampToValueAtTime(48, now + 0.04);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.05, now);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  /**
   * Plays a subtle muted double-tick confirmation for Copy / Action feedback.
   */
  public playConfirmTick(): void {
    this.playKeyClick("soft");
    setTimeout(() => {
      this.playReturnKey();
    }, 65);
  }
}

export const terminalAudio = new TerminalAudioEngine();
