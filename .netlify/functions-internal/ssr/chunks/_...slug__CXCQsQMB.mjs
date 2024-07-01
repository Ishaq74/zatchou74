import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro, a as renderComponent, u as unescapeHTML } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import { u as StepService, g as getCollection, a as $$BaseLayout } from './BaseLayout_B19851el.mjs';
import { $ as $$Container1 } from './Container1_6j8VJpfb.mjs';
import { $ as $$Grid } from './Grid_CDcsMZ6G.mjs';
import 'clsx';
/* empty css                          */
import { $ as $$PostBanner } from './PostBanner_DOuX89vI.mjs';
import { $ as $$ServiceCard1 } from './ServiceCard1_BCSmRXGW.mjs';

const $$Astro$2 = createAstro();
const $$FaqAtoutService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FaqAtoutService;
  const { atoutsservices } = Astro2.props;
  return renderTemplate`${atoutsservices && atoutsservices.length > 0 && renderTemplate`${maybeRenderHead()}<ul class="cs-faq-group" data-astro-cid-sw73kcjm>${atoutsservices.map((atout) => renderTemplate`<li class="cs-faq-item" data-astro-cid-sw73kcjm><button class="cs-button" data-astro-cid-sw73kcjm>${atout.icon && renderTemplate`<img class="cs-icon" aria-hidden="true" loading="lazy" decoding="async"${addAttribute(atout.icon, "src")} alt="icon" width="32" height="32" data-astro-cid-sw73kcjm>`}<span class="cs-button-text" data-astro-cid-sw73kcjm>${atout.title}</span><span class="cs-indicator" aria-hidden="true" data-astro-cid-sw73kcjm></span></button><p class="cs-item-p" data-astro-cid-sw73kcjm>${atout.text}</p></li>`)}</ul>`}`;
}, "C:/Users/Utilisateur/zatchou74/src/components/Section/FaqAtoutService.astro", void 0);

const $$Astro$1 = createAstro();
const $$HeroService = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroService;
  const { entry, atoutsservices } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${maybeRenderHead()}<section id="services-1666" data-astro-cid-lpfc22wx> <div class="cs-container" data-astro-cid-lpfc22wx> <div class="cs-image-group" data-astro-cid-lpfc22wx> <picture class="cs-picture" data-astro-cid-lpfc22wx> <!--Mobile Image--> <source media="(max-width: 600px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-standing.jpeg" data-astro-cid-lpfc22wx> <!--Tablet and above Image--> <source media="(min-width: 601px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-standing.jpeg" data-astro-cid-lpfc22wx> <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-standing.jpeg" alt="people standing" width="605" height="690" data-astro-cid-lpfc22wx> </picture> <!--SVG Graphic--> <img class="cs-floater" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-swirl.svg" alt="graphic" loading="lazy" decoding="async" height="710" aria-hidden="true" width="690" data-astro-cid-lpfc22wx> </div> <div class="cs-content" data-astro-cid-lpfc22wx> <span class="cs-topper" data-astro-cid-lpfc22wx>Nos Services</span> <h2 class="cs-title" data-astro-cid-lpfc22wx>Recrutement Gagnant avec Rahma : La Clé de Votre Succès</h2> ${renderComponent($$result, "Content", Content, { "data-astro-cid-lpfc22wx": true })} ${atoutsservices && atoutsservices.length > 0 && renderTemplate`${renderComponent($$result, "FaqAtoutService", $$FaqAtoutService, { "atoutsservices": atoutsservices, "data-astro-cid-lpfc22wx": true })}`} </div> </div> </section> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Section/HeroService.astro", void 0);

const $$Steps1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="steps-284" data-astro-cid-w6ifigl3> <div class="cs-container" data-astro-cid-w6ifigl3> <!-- Left Section --> <div class="cs-content" data-astro-cid-w6ifigl3> <span class="cs-topper" data-astro-cid-w6ifigl3>Steps</span> <h2 class="cs-title" data-astro-cid-w6ifigl3>${StepService.title}</h2> <p class="cs-text" data-astro-cid-w6ifigl3>${StepService.description}</p> <a href="" class="cs-button-solid" data-astro-cid-w6ifigl3>${StepService.buttonText}</a> </div> <!-- Right Section --> <ul class="cs-right-section" data-astro-cid-w6ifigl3> ${StepService.steps.map((step) => renderTemplate`<li class="cs-item" data-astro-cid-w6ifigl3> <span class="cs-number" data-astro-cid-w6ifigl3>${step.number}</span> <p class="cs-item-text" data-astro-cid-w6ifigl3>${unescapeHTML(step.text)}</p> </li>`)} </ul> </div> </section> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Steps/Steps1.astro", void 0);

const $$Pricing1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="pricing-1387" data-astro-cid-vfjtvzyg> <div class="cs-container" data-astro-cid-vfjtvzyg> <div class="cs-content" data-astro-cid-vfjtvzyg> <span class="cs-topper" data-astro-cid-vfjtvzyg>Our Pricing</span> <h2 class="cs-title" data-astro-cid-vfjtvzyg>Flexible Pricing Plans for Your Tailored Needs</h2> <p class="cs-text" data-astro-cid-vfjtvzyg>
In the new era of technology we look in the future with certainty and for any post types, or just they are so much great of all to a program.
</p> <div class="cs-toggle-group" data-astro-cid-vfjtvzyg> <span id="cs-option1-1387" class="cs-plan" data-astro-cid-vfjtvzyg>Pay Annually</span> <div class="cs-toggle" aria-label="click to switch plans pricing" data-astro-cid-vfjtvzyg> <span aria-hidden="true" class="cs-toggle-switch" data-astro-cid-vfjtvzyg></span> </div> <span id="cs-option2-1387" class="cs-plan" data-astro-cid-vfjtvzyg>Pay Monthly</span> </div> </div> <ul class="cs-card-group cs-option1" data-astro-cid-vfjtvzyg> <li class="cs-item cs-popular" data-astro-cid-vfjtvzyg> <div class="cs-flex" data-astro-cid-vfjtvzyg> <span class="cs-package" data-astro-cid-vfjtvzyg>Standard Pack</span> <span class="cs-price" data-astro-cid-vfjtvzyg>
$99
<span class="cs-duration" data-astro-cid-vfjtvzyg>/Month</span> </span> <div class="cs-tag" data-astro-cid-vfjtvzyg> <img class="cs-icon" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/fire.svg" decoding="async" alt="fire" width="16" height="16" loading="lazy" data-astro-cid-vfjtvzyg>
Hot Deal
</div> </div> <div class="cs-info" data-astro-cid-vfjtvzyg> <ul class="cs-ul" data-astro-cid-vfjtvzyg> <li class="cs-li" data-astro-cid-vfjtvzyg>Mobile-Optimized</li> <li class="cs-li" data-astro-cid-vfjtvzyg>Free Custom Domain</li> <li class="cs-li" data-astro-cid-vfjtvzyg>Best Hosting</li> <li class="cs-li cs-disabled" data-astro-cid-vfjtvzyg>Outstanding Support</li> <li class="cs-li cs-disabled" data-astro-cid-vfjtvzyg>Happy Customers</li> </ul> <a href="" class="cs-button-transparent" data-astro-cid-vfjtvzyg>Get Now</a> </div> </li> <li class="cs-item" data-astro-cid-vfjtvzyg> <div class="cs-flex" data-astro-cid-vfjtvzyg> <span class="cs-package" data-astro-cid-vfjtvzyg>Corporate Pack</span> <span class="cs-price" data-astro-cid-vfjtvzyg>
$299
<span class="cs-duration" data-astro-cid-vfjtvzyg>/Month</span> </span> <div class="cs-tag" data-astro-cid-vfjtvzyg> <img class="cs-icon" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/fire.svg" decoding="async" alt="fire" width="16" height="16" loading="lazy" data-astro-cid-vfjtvzyg>
Hot Deal
</div> </div> <div class="cs-info" data-astro-cid-vfjtvzyg> <ul class="cs-ul" data-astro-cid-vfjtvzyg> <li class="cs-li" data-astro-cid-vfjtvzyg>Mobile-Optimized</li> <li class="cs-li" data-astro-cid-vfjtvzyg>Free Custom Domain</li> <li class="cs-li" data-astro-cid-vfjtvzyg>Best Hosting</li> </ul> <a href="" class="cs-button-transparent" data-astro-cid-vfjtvzyg>Read More</a> </div> </li> </ul> <ul class="cs-card-group cs-option2" data-astro-cid-vfjtvzyg> <li class="cs-item cs-popular" data-astro-cid-vfjtvzyg> <div class="cs-flex" data-astro-cid-vfjtvzyg> <span class="cs-package" data-astro-cid-vfjtvzyg>Standard Pack</span> <span class="cs-price" data-astro-cid-vfjtvzyg>
$99
<span class="cs-duration" data-astro-cid-vfjtvzyg>/Year</span> </span> <div class="cs-tag" data-astro-cid-vfjtvzyg> <img class="cs-icon" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/fire.svg" decoding="async" alt="fire" width="16" height="16" loading="lazy" data-astro-cid-vfjtvzyg>
Hot Deal
</div> </div> <div class="cs-info" data-astro-cid-vfjtvzyg> <ul class="cs-ul" data-astro-cid-vfjtvzyg> <li class="cs-li" data-astro-cid-vfjtvzyg>Mobile-Optimized</li> <li class="cs-li" data-astro-cid-vfjtvzyg>Free Custom Domain</li> <li class="cs-li" data-astro-cid-vfjtvzyg>Best Hosting</li> <li class="cs-li cs-disabled" data-astro-cid-vfjtvzyg>Outstanding Support</li> <li class="cs-li cs-disabled" data-astro-cid-vfjtvzyg>Happy Customers</li> </ul> <a href="" class="cs-button-transparent" data-astro-cid-vfjtvzyg>Get Now</a> </div> </li> <li class="cs-item" data-astro-cid-vfjtvzyg> <div class="cs-flex" data-astro-cid-vfjtvzyg> <span class="cs-package" data-astro-cid-vfjtvzyg>Corporate Pack</span> <span class="cs-price" data-astro-cid-vfjtvzyg>
$299
<span class="cs-duration" data-astro-cid-vfjtvzyg>/Year</span> </span> <div class="cs-tag" data-astro-cid-vfjtvzyg> <img class="cs-icon" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/fire.svg" decoding="async" alt="fire" width="16" height="16" loading="lazy" data-astro-cid-vfjtvzyg>
Hot Deal
</div> </div> <div class="cs-info" data-astro-cid-vfjtvzyg> <ul class="cs-ul" data-astro-cid-vfjtvzyg> <li class="cs-li" data-astro-cid-vfjtvzyg>Mobile-Optimized</li> <li class="cs-li" data-astro-cid-vfjtvzyg>Free Custom Domain</li> <li class="cs-li" data-astro-cid-vfjtvzyg>Best Hosting</li> </ul> <a href="" class="cs-button-transparent" data-astro-cid-vfjtvzyg>Read More</a> </div> </li> </ul> </div> </section>  `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Pricing/Pricing1.astro", void 0);

const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="cta-1394" data-astro-cid-f3dl6phf> <div class="cs-container" data-astro-cid-f3dl6phf> <div class="cs-content" data-astro-cid-f3dl6phf> <span class="cs-topper" data-astro-cid-f3dl6phf>Subscribe</span> <h2 class="cs-title" data-astro-cid-f3dl6phf>Subscribe for Newsletter</h2> <p class="cs-text" data-astro-cid-f3dl6phf>
Subscribe to our newsletter and stay up-to-date with the latest news, exclusive offers, and exciting updates.
</p> <form class="cs-form" name="Contact Form" method="post" data-astro-cid-f3dl6phf> <input class="cs-input" type="email" id="cs-email-1394" name="find-us" placeholder="Email Address" data-astro-cid-f3dl6phf> <button class="cs-button-solid cs-submit" type="submit" data-astro-cid-f3dl6phf>Subscribe Now</button> </form> </div> </div> <!--Background Image--> <picture class="cs-background" data-astro-cid-f3dl6phf> <source media="(max-width: 600px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting10.jpg" data-astro-cid-f3dl6phf> <source media="(min-width: 601px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting10.jpg" data-astro-cid-f3dl6phf> <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting10.jpg" alt="meeting" width="1920" height="486" aria-hidden="true" data-astro-cid-f3dl6phf> </picture> </section> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Newsletter/Newsletter.astro", void 0);

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const services = await getCollection("services");
  return services.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  await entry.render();
  const services = await getCollection("services");
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BaseLayout, { "frontmatter": entry.data, "entry": entry, "data-astro-cid-3fxtnocf": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostBanner", $$PostBanner, { "showCredit": false, "showExtra": false, "title": entry.data.title, "image": entry.data.image, "altimage": "", "data-astro-cid-3fxtnocf": true })} ${renderComponent($$result2, "HeroService", $$HeroService, { "entry": entry, "atoutsservices": entry.data.atoutsservices, "data-astro-cid-3fxtnocf": true })} ${renderComponent($$result2, "Steps1", $$Steps1, { "data-astro-cid-3fxtnocf": true })} ${renderComponent($$result2, "Pricing1", $$Pricing1, { "data-astro-cid-3fxtnocf": true })} ${renderComponent($$result2, "Newsletter", $$Newsletter, { "data-astro-cid-3fxtnocf": true })} ${maybeRenderHead()}<section id="ArticlesRelatifs" data-astro-cid-3fxtnocf> ${renderComponent($$result2, "Container", $$Container1, { "topper": "Derni\xE8res Nouvelles et Articles", "title": "Blog", "description": "D\xE9couvrez les derni\xE8res nouvelles et articles de notre blog.", "class": "cs-container", "data-astro-cid-3fxtnocf": true }, { "default": ($$result3) => renderTemplate` <ul class="cs-list" data-astro-cid-3fxtnocf> ${renderComponent($$result3, "Grid", $$Grid, { "columnsDesktop": 4, "columnsTablet": 2, "columnsMobile": 1, "minColumnWidthDesktop": "300px", "minColumnWidthTablet": "200px", "minColumnWidthMobile": "150px", "gap": "24px", "backgroundColor": "transparent", "data-astro-cid-3fxtnocf": true }, { "default": ($$result4) => renderTemplate`${services.slice(0, 4).map((p) => renderTemplate`${renderComponent($$result4, "ServiceCard1", $$ServiceCard1, { "service": p, "data-astro-cid-3fxtnocf": true })}`)}` })} </ul> ` })} <div class="cs-bubbles" aria-hidden="true" data-astro-cid-3fxtnocf></div> </section> ` })} `;
}, "C:/Users/Utilisateur/zatchou74/src/pages/services/[...slug].astro", void 0);

const $$file = "C:/Users/Utilisateur/zatchou74/src/pages/services/[...slug].astro";
const $$url = "/services/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, prerender, $$url as url };
