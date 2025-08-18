# MCH-Dev Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Moonchain](https://img.shields.io/badge/Moonchain-Developer%20Docs-D2F159?style=flat&logo=ethereum)](https://moonchain.com)

> 🌙 **Official Developer Documentation for Moonchain (MCH)** - A comprehensive guide for developers, covering smart contracts, testnet tutorials, design documentation, and resources.

## 📖 About

This repository contains the complete developer documentation for Moonchain, built with [Astro Starlight](https://starlight.astro.build/). The documentation covers everything from basic setup to advanced blockchain development on the Moonchain ecosystem.

### 🎯 What's Included

- **🔗 Contract Documentation** - Complete smart contract references and APIs
- **🧪 Testnet Tutorials** - Step-by-step guides for Hudson Testnet
- **🏗️ Mainnet Tutorials** - Production deployment guides
- **🎨 Moonchain Design** - Architecture and design principles
- **📚 Resources** - Additional tools, links, and references

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/JDI-Group/MCH-Docs.git
cd MCH-Docs

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the documentation locally.

## 🏗️ Project Structure

```
MCH-Docs/
├── public/
│   ├── img/                    # Documentation images
│   └── Brand/                  # MCH brand assets
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── contract-documentation/
│   │       ├── testnet-tutorials/
│   │       ├── mainnet-tutorials/
│   │       ├── moonchain-design/
│   │       ├── resources/
│   │       └── index.mdx
│   └── styles/
│       └── custom.css          # MCH brand customizations
├── astro.config.mjs            # Starlight configuration
└── package.json
```

## 🎨 Brand Guidelines

This documentation follows Moonchain's official brand guidelines:

- **Colors**: Primary (#D2F159), Secondary (#a8cc47)
- **Fonts**: Nunito (headings), Inter (code/monospace)
- **Theme**: Custom light/dark mode support

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run astro ...` | Run Astro CLI commands |

## 📝 Contributing

We welcome contributions to improve the MCH documentation! Here's how you can help:

### Adding Content

1. **New Tutorial**: Add `.md` files to appropriate folders in `src/content/docs/`
2. **Images**: Place images in `public/img/` with descriptive names
3. **Navigation**: Update `astro.config.mjs` sidebar configuration if needed

### Style Guidelines

- Use clear, concise language
- Include code examples where applicable
- Add screenshots for UI-based tutorials
- Follow the existing document structure

### Submitting Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-tutorial`)
3. Commit your changes (`git commit -m 'Add new tutorial'`)
4. Push to the branch (`git push origin feature/new-tutorial`)
5. Create a Pull Request

## 🌐 Deployment

The documentation is automatically deployed via GitHub Pages/Vercel when changes are pushed to the `main` branch.

### Manual Deployment

```bash
# Build the site
npm run build

# The built site will be in ./dist/
```

## 📞 Support

- **Moonchain Website**: [moonchain.com](https://moonchain.com)
- **Developer Portal**: [dev.moonchain.com](https://dev.moonchain.com)
- **GitHub Issues**: [Report bugs or request features](https://github.com/JDI-Group/MCH-Docs/issues)
- **Community**: Join our Discord for developer discussions

## 📄 License

This documentation is open source and available under the [MIT License](LICENSE).

## 🚀 Built With

- [Astro](https://astro.build/) - Static site generator
- [Starlight](https://starlight.astro.build/) - Documentation framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework

---

**Happy building on Moonchain! 🌙✨**