const posts = [
  {
    id: 1,
    blogTitle: "My Blog",
    navigationLinks: ["Home", "Posts", "About", "Contact"],
    posts: [
      { title: "Great Gate", description: "the greate gate description" },
      { title: "New Blog", description: "the New Blog description" },
      { title: "Cat Blog", description: "the Cat Blog description" },
      {
        title: "Waste Money",
        description: "Don't Waste Money description",
      },
    ],
    isloggedIn: true,
  },
  {
    id: 2,
    blogTitle: "Your Blog",
    navigationLinks: ["My Posts", "Profile", "About", "Contact"],
    posts: [],
    isloggedIn: true,
  },
  {
    id: 3,
    blogTitle: "Blog Now",
    navigationLinks: ["Blog", "News", "Trending", "Contact"],
    posts: [
      { title: "Great Gate", description: "the greate gate description" },
      { title: "New Blog", description: "the New Blog description" },
      { title: "Cat Blog", description: "the Cat Blog description" },
    ],
    isloggedIn: true,
  },
  {
    id: 4,
    blogTitle: "Start Blog",
    navigationLinks: ["Economic", "Learn", "About", "Contact"],
    posts: [
      { title: "Great Gate", description: "the greate gate description" },
      {
        title: "Waste Money",
        description: "Don't Waste Money description",
      },
    ],
    isloggedIn: false,
  },
];

export default posts;
