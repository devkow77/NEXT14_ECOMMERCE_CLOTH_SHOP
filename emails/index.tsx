import {
  Heading,
  Html,
  Head,
  Font,
  Button,
  Text,
} from "@react-email/components";
import * as React from "react";

interface Props {
  email: string;
  message: string;
}

const Email = ({ email, message }: Props) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <div
        style={{
          padding: "30px",
          borderRadius: "8px",
          backgroundColor: "#232323",
          color: "#fff",
          maxWidth: "800px",
        }}
      >
        <Heading as="h1" style={{ fontWeight: "800" }}>
          Fendie
        </Heading>
        <Text
          style={{
            fontSize: "14px",
            margin: "-15px 0px 30px 0px",
            lineHeight: "26px",
            fontWeight: "500",
            color: "#bfbdbd",
          }}
        >
          Discover New York Cloth Shop, where timeless elegance meets
          contemporary fashion. Explore our curated collection of high-quality,
          stylish garments perfect for every occasion.
        </Text>
        <Text
          style={{
            fontSize: "15px",
            lineHeight: "26px",
          }}
        >
          <span style={{ fontWeight: "600" }}>Email: </span>
          {email} <br /> <span style={{ fontWeight: "600" }}>Message: </span>
          {message}
        </Text>
        <Button
          href="https://next14-ecommerce-cloth-shop.vercel.app/"
          style={{
            color: "#fff",
            padding: "10px 20px",
            backgroundColor: "#d61818",
            borderRadius: "8px",
          }}
        >
          Go to Page
        </Button>
      </div>
    </Html>
  );
};

export default Email;
