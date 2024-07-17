import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

// start of declarations of property, so that the props in const FooterColumn didnt do some red line of errors
type ColumnProps = {
  title: string;
  links: Array<string>;
};
// end of declarations of property

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          {/* start of logo */}
          <Image
            src="/logo-purple.svg"
            alt="flexible-purple"
            width={115}
            height={38}
          />
          {/* end of logo */}

          {/* start of short description */}
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexible is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
          {/* end of short description */}
        </div>
        {/* start of footer main */}
        {/*
+          We're going to render all the columns of the footer here. We're using
+          the FooterColumn component to render each column. We're also using
+          the `flex-1` class to make each column take up an equal amount of
+          horizontal space. We're also using the `flex flex-col gap-4` class to
+          stack the columns vertically and add some gap between them.
+        */}
        <div className="flex flex-wrap gap-12 ">
          {/*
+            The first column contains the "For developers" links. We're passing
+            the title and links of the first item in the footerLinks array to
+            the FooterColumn component.
+          */}
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          {/*
+            The second column contains the "Hire developers" and "Brands" links.
+            We're wrapping the columns in a div with the `flex-1` class so that
+            they take up an equal amount of horizontal space. We're also using
+            the `flex flex-col gap-4` class to stack the columns vertically and
+            add some gap between them.
+          */}
          <div className="flex-1 flex flex-col gap-4">
            {/*
+              The first sub-column contains the "Hire developers" links. We're
+              passing the title and links of the second item in the footerLinks
+              array to the FooterColumn component.
+            */}
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            {/*
+              The second sub-column contains the "Brands" links. We're passing
+              the title and links of the third item in the footerLinks array to
+              the FooterColumn component.
+            */}
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          {/*
+            The third column contains the "Company" links. We're passing the title
+            and links of the fourth item in the footerLinks array to the
+            FooterColumn component.
+          */}
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          {/*
+            The fourth column contains the "Directories" links. We're wrapping the
+            columns in a div with the `flex-1` class so that they take up an
+            equal amount of horizontal space. We're also using the `flex flex-col
+            gap-4` class to stack the columns vertically and add some gap between
+            them.
+          */}
          <div className="flex-1 flex flex-col gap-4">
            {/*
+              The first sub-column contains the "Development jobs" and "Freelance
+              developers for hire" links. We're passing the title and links of the
+              fifth and sixth items in the footerLinks array to the
+              FooterColumn component.
+            */}
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            {/*
+              The second sub-column contains the "Tags" and "Places" links. We're
+              passing the title and links of the seventh item in the footerLinks
+              array to the FooterColumn component.
+            */}
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          {/*
+            The fifth column contains the "Developers for hire" links. We're
+            passing the title and links of the eighth item in the footerLinks
+            array to the FooterColumn component.
+          */}
          <FooterColumn
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
        {/* end of footer main */}
      </div>

      {/* start of copyright */}
      <div className="flexBetween footer_copyright">
        <p>@2023 flexible. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10,214</span> projects
          submitted
        </p>
      </div>
      {/* end of copyright */}
    </footer>
  );
};

export default Footer;
