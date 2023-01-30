import Grid from "@mui/material/Grid";
import Feature from "./Feature";

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "",
    imageLabel: "Image Text",
  },
];

function ResultContent() {
  return (
    <Grid container spacing={4}>
      {featuredPosts.map((post) => (
        <Feature key={post.title} post={post} />
      ))}
    </Grid>
  );
}

export default function Result() {
  return <ResultContent />;
}
