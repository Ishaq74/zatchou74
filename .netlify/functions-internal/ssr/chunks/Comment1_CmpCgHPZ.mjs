import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"nom":"Ishaq","photo":"client1.webp","ville":"Annecy","job":"Développeur web","categorie":"Catégorie1","note":5,"texte":"Franchement top, j'ai la stack sur mesure maintenant !"};
				const file = "C:/Users/Utilisateur/zatchou74/src/content/commentaires/Comment1.md";
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
