// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MCH dev docs',
			description: 'Official documentation for Moonchain zkEVM - building a decentralized AI hardware network',
			logo: {
				src: './public/img/Moonchain_Logo.svg',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/JDI-Group' },
				{ icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/Moonchain_com' },
			],
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Enhanced Accessibility', slug: 'enhanced-accessibility' },
					],
				},
				{
					label: 'Moonchain Design',
					autogenerate: { directory: 'moonchain-design' },
				},
				{
					label: 'Mainnet Tutorials',
					autogenerate: { directory: 'mainnet-tutorials' },
				},
				{
					label: 'Testnet Tutorials',
					autogenerate: { directory: 'testnet-tutorials' },
				},
				{
					label: 'Contract Documentation',
					collapsed: false,
					items: [
						{
							label: 'Bridge Contracts',
							autogenerate: { directory: 'contract-documentation/bridge-contract-documentation' },
						},
						{
							label: 'Common Contracts',
							autogenerate: { directory: 'contract-documentation/common' },
						},
						{
							label: 'L1 Contracts',
							autogenerate: { directory: 'contract-documentation/l1-contract-documentation' },
						},
						{
							label: 'L2 Contracts',
							autogenerate: { directory: 'contract-documentation/l2-contract-documentation' },
						},
						{
							label: 'Signal Service',
							autogenerate: { directory: 'contract-documentation/signal' },
						},
					],
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'resources' },
				},
			],
		}),
	],
});
