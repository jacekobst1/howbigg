interface Route {
  href: string;
  label: string;
}

export const main = { href: "/", label: "Display comparison" };
export const blog = { href: "/blog", label: "Blog" };
export const contact = { href: "/contact", label: "Contact" };

const routes: Route[] = [main, blog];

export default routes;
