# Nuxt ShadCN Tailwind FiveM Boilerplate

A comprehensive starter template designed for creating FiveM servers with a modern front-end stack. This boilerplate leverages **Nuxt.js**, **Tailwind CSS**, **ShadCN components**, and integrates seamlessly with **Lua** for server-side scripting.

---

## Features

- **Nuxt.js**: Build highly optimized, server-side rendered, or static websites.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **ShadCN Components**: Pre-styled and accessible React-inspired components for modern UIs.
- **FiveM Integration**: Lua scripts for handling server-client communication in FiveM.
- **TypeScript Support**: Ensures type safety and better developer experience.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/jackpilstrand/nuxt-shadcn-tailwind-fivem-boilerplate.git
cd nuxt-shadcn-tailwind-fivem-boilerplate
```

Install dependencies:

```bash
npm install
```


---

## Commands

### Development

Run the project in development mode with hot module replacement:

```bash
npm run dev
```

### Build

Create a production-ready build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Generate Static Files

Generate static files for deployment to a static hosting environment:

```bash
npm run generate
```

### Post-Install Setup

Prepare your Nuxt environment after installing dependencies. This step ensures all Nuxt-related setup is finalized:

```bash
npm run postinstall
```

--- 

This section now provides complete information about all the available commands!
---

## Integration with FiveM

### `fxmanifest.lua`

Ensure the `fxmanifest.lua` file is correctly configured to load your UI and Lua scripts:

```lua
fx_version 'cerulean'
game 'gta5'
lua54 'yes'

client_scripts {
    'scripts/client/main.lua'
}

server_scripts {
    'scripts/server/main.lua'
}

shared_scripts {
    'scripts/shared/config.lua'
}

ui_page 'dist/index.html'

files {
    'dist/index.html',
    'dist/assets/**'
}
```

---

## Links and Resources

- [Nuxt.js Documentation](https://nuxt.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN Components](https://www.shadcn-vue.com/)
- [FiveM Documentation](https://docs.fivem.net/)
- [Pinia State Management](https://pinia.vuejs.org/)
- [Lua Language](https://www.lua.org/manual/5.4/)

---

## Contributing

Contributions are welcome! Please submit an issue or pull request if you encounter any problems or have suggestions for new features.
