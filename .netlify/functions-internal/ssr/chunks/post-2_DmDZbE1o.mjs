import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Titre Article 2 Custom OK","description":"Description custom deuxième post OK","tags":"Catégorie 2","image":"post-1.webp","date":"2025-08-24T00:00:00.000Z","author":"author-1","relatedPosts":["post-1"]};
				const file = "C:/Users/Utilisateur/zatchou74/src/content/posts/post-2.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
