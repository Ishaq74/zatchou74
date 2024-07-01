import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"consultation-personnalisée\">Consultation Personnalisée</h1>\n<p>Nous offrons des consultations personnalisées pour mieux comprendre votre horoscope et vous guider dans votre vie quotidienne.</p>";

				const frontmatter = {"title":"Consultation Personnalisée","description":"Nous offrons des consultations personnalisées pour mieux comprendre votre horoscope.","tags":"Catégorie 1","image":"service-1.webp","icon":"icon icon-linkedin"};
				const file = "C:/Users/Utilisateur/zatchou74/src/content/services/service-1.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# Consultation Personnalisée\r\n\r\nNous offrons des consultations personnalisées pour mieux comprendre votre horoscope et vous guider dans votre vie quotidienne.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"consultation-personnalisée","text":"Consultation Personnalisée"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
