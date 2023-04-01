import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: <span>Atomic State</span>,
  project: {
    link: "https://github.com/atomic-state/atomic-state",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase:
    "https://github.com/atomic-state/atomic-state.netlify.app/tree/main",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Atomic State",
      description: "Atomic State is a state management library for React",
    }
  },
  footer: {
    text: "Built with Nextra",
  },
}

export default config
