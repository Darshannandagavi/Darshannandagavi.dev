# Project Context

You are helping with an existing software project.

## Instructions

1. First understand the project architecture before answering.
2. Do not modify unrelated files.
3. Reuse the existing project structure and coding style.
4. Make only the minimum required changes.
5. Mention every file that needs to be modified.
6. If additional files are required, ask only for those files.

---

## Project Structure

```text
├── .gitignore
├── index.html
├── package.json
├── pnpm-workspace.yaml
├── public
│   ├── _redirects
│   ├── friday-audio-worklet.js
│   ├── google55e4e7857bad0821.html
│   ├── robots.txt
│   └── sitemap.xml
└── vite.config.js
```

===============================================================================
FILE: .gitignore
===============================================================================

```text
# Dependencies
node_modules/

# Build output
dist/
dist-ssr/

# Environment files
.env
.env.local
.env.development.local
.env.production.local
.env.test.local

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Vite
.vite/

# IDE
.vscode/*
!.vscode/extensions.json
.idea/

# OS files
.DS_Store
Thumbs.db

# Coverage
coverage/

# Cache
.cache/
.eslintcache

# TypeScript
*.tsbuildinfo

# Temporary files
*.tmp
*.temp

# Local Netlify/Vercel files
.netlify/
.vercel/

# Optional package manager files
.pnpm-store/

# Bun
bun.lockb
```

===============================================================================
FILE: index.html
===============================================================================

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Darshan N Nandagavi | Full Stack Developer Portfolio</title>
    <meta name="description" content="Portfolio of Darshan N Nandagavi, a Full Stack Developer skilled in MERN, Python and Machine Learning. Explore projects, skills and contact details." />
    <link rel="canonical" href="https://darshannandagavi.netlify.app/" />

    <link rel="icon" type="image/jpeg" href="/darshan.jpg" />

    <!-- Link preview (WhatsApp, LinkedIn, etc.) -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Darshan N Nandagavi | Full Stack Developer Portfolio" />
    <meta property="og:description" content="Full Stack Developer skilled in MERN, Python and Machine Learning. Explore my projects and skills." />
    <meta property="og:url" content="https://darshannandagavi.netlify.app/" />
    <meta property="og:image" content="https://darshannandagavi.netlify.app/darshan.jpg" />

    <!-- Helps Google connect your name to your profiles -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Darshan N Nandagavi",
      "jobTitle": "Full Stack Developer",
      "url": "https://darshannandagavi.netlify.app/",
      "sameAs": [
        "https://github.com/Darshannandagavi",
        "https://www.linkedin.com/in/darshan-nandagavi",
        "https://www.instagram.com/mr_darshan_nandagavi/",
        "https://www.facebook.com/darshan.nandagavi",
        "https://leetcode.com/u/darshannandagavi/"
      ]
    }
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
      body { background: #222; margin: 0; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <noscript>
      Darshan N Nandagavi - Full Stack Developer. MERN, Python and Machine Learning projects.
    </noscript>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

===============================================================================
FILE: package.json
===============================================================================

```json
{
  "name": "portfolio",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@google/genai": "^2.11.0",
    "@react-three/drei": "^9.117.0",
    "@react-three/fiber": "^8.17.0",
    "gsap": "^3.12.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.4.0",
    "react-parallax-tilt": "^1.7.333",
    "react-router-dom": "^7.18.1",
    "three": "^0.170.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.0.0",
    "vite": "^6.0.0"
  }
}
```

===============================================================================
FILE: pnpm-workspace.yaml
===============================================================================

```yaml
allowBuilds:
  '@google/genai': set this to true or false
  esbuild: true
  protobufjs: set this to true or false
```

===============================================================================
FILE: public/friday-audio-worklet.js
===============================================================================

```js
class FridayPortfolioAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super()

    this.targetSampleRate = 16000
    this.inputBuffer = []
    this.chunkSize = 2048
  }

  convertToPcm16(samples) {
    const pcm = new Int16Array(samples.length)

    for (let index = 0; index < samples.length; index += 1) {
      const sample = Math.max(
        -1,
        Math.min(1, samples[index]),
      )

      pcm[index] =
        sample < 0
          ? sample * 0x8000
          : sample * 0x7fff
    }

    return pcm
  }

  resample(samples) {
    if (sampleRate === this.targetSampleRate) {
      return samples
    }

    const ratio = sampleRate / this.targetSampleRate
    const outputLength = Math.floor(
      samples.length / ratio,
    )

    const output = new Float32Array(outputLength)

    for (
      let outputIndex = 0;
      outputIndex < outputLength;
      outputIndex += 1
    ) {
      const inputPosition = outputIndex * ratio
      const lowerIndex = Math.floor(inputPosition)

      const upperIndex = Math.min(
        lowerIndex + 1,
        samples.length - 1,
      )

      const fraction = inputPosition - lowerIndex

      output[outputIndex] =
        samples[lowerIndex] * (1 - fraction) +
        samples[upperIndex] * fraction
    }

    return output
  }

  process(inputs) {
    const inputChannel = inputs?.[0]?.[0]

    if (!inputChannel) {
      return true
    }

    for (
      let index = 0;
      index < inputChannel.length;
      index += 1
    ) {
      this.inputBuffer.push(inputChannel[index])
    }

    const requiredInputSamples = Math.ceil(
      this.chunkSize *
        (sampleRate / this.targetSampleRate),
    )

    while (
      this.inputBuffer.length >= requiredInputSamples
    ) {
      const sourceSamples = new Float32Array(
        this.inputBuffer.splice(
          0,
          requiredInputSamples,
        ),
      )

      const resampled = this.resample(sourceSamples)
      const pcm = this.convertToPcm16(resampled)

      this.port.postMessage(pcm.buffer, [pcm.buffer])
    }

    return true
  }
}

registerProcessor(
  'friday-portfolio-audio-processor',
  FridayPortfolioAudioProcessor,
)
```

===============================================================================
FILE: public/google55e4e7857bad0821.html
===============================================================================

```html
google-site-verification: google55e4e7857bad0821.html
```

===============================================================================
FILE: public/robots.txt
===============================================================================

```text
   User-agent: *
   Allow: /

   Sitemap: https://darshannandagavi.netlify.app/sitemap.xml
```

===============================================================================
FILE: public/sitemap.xml
===============================================================================

```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://darshannandagavi.netlify.app/</loc>
     </url>
   </urlset>
```

===============================================================================
FILE: public/_redirects
===============================================================================

```text
/*  /index.html  200
```

===============================================================================
FILE: vite.config.js
===============================================================================

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

-------------------------------------------------------------------------------

Generated by ctx

Total Files: 10
