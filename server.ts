import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

// Standard ES Module path resolution (with safe fallback for bundled environments)
const getDirname = () => {
  try {
    return path.dirname(fileURLToPath(import.meta.url));
  } catch {
    return process.cwd();
  }
};
const __dirname = getDirname();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // --- Backend API Routes ---

  // Health check endpoint
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      service: "HANY'S WORLD Portfolio API",
    });
  });

  // Profile data endpoint
  app.get("/api/profile", (_req: Request, res: Response) => {
    res.json({
      name: "Moustafa Hany Azab",
      alias: "Hany Zamlkawy",
      role: "Software & Data Engineering",
      mission: "Code. Ship. Impact.",
      location: "Alexandria, Egypt",
      phone: "01228494191",
      email: "moustfahhany5@gmail.com",
      focus: [
        "Front-End Development & React.js",
        "Full-Stack Architecture",
        "Data Engineering Workflows (DEPI)",
        "AI & LLM Workflows (FlyRank AI)",
      ],
      socials: {
        portfolio: "https://hany-s-world-597716960036.europe-west2.run.app/",
        github: "https://github.com/Hany-Zamalkawy",
        linkedin: "https://www.linkedin.com/in/moustafa-hany-azab-4550692b9/",
        whatsapp: "https://wa.me/201228494191",
        instagram: "https://www.instagram.com/hany_zamlkawy/",
        facebook: "https://www.facebook.com/Hany.Zamlkawy",
      },
    });
  });

  // Contact / Message submission endpoint
  app.post("/api/contact", (req: Request, res: Response) => {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: name, email, and message are required.",
      });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Invalid email address format.",
      });
    }

    console.log(`[Contact API] Received message from ${name} (${email}): ${message.slice(0, 80)}...`);

    return res.json({
      success: true,
      message: "Your message has been received! Moustafa will respond to your inquiry shortly.",
      receivedAt: new Date().toISOString(),
    });
  });

  // --- Vite Frontend Middleware / Static Distribution ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Determine the dist directory location across different execution contexts
    const distPath = path.resolve(__dirname, "dist");
    const fallbackDistPath = path.resolve(process.cwd(), "dist");
    const resolvedDist = path.resolve(distPath);

    app.use(express.static(resolvedDist));
    app.use(express.static(fallbackDistPath));

    app.get("*", (_req: Request, res: Response) => {
      const indexPath = path.join(resolvedDist, "index.html");
      res.sendFile(indexPath, (err) => {
        if (err) {
          res.sendFile(path.join(fallbackDistPath, "index.html"));
        }
      });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
