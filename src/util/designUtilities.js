const TEXT = "txt";

const categoryList = ["accessories", "corsetry", "historical", "vintage"];

const inCategory = category => file => file.dir.includes(category);

const designsByCategory = (files, category) =>
  files.filter(inCategory(category)).reduce((directories, file) => {
    const designName = file.dir.substring(
      file.dir.lastIndexOf("/") + 1,
      file.dir.length
    );

    if (!directories.includes(designName)) {
      directories.push(designName);
    }

    return directories;
  }, []);

const markdownByCategory = (files, category) => {
  return files.filter(file => file.path.includes(category));
};

const imageSrcOrNull = node =>
  node.childImageSharp ? node.childImageSharp.fluid.src : null;

const designFiles = edges =>
  edges.map(edge => ({
    name: edge.node.name,
    dir: edge.node.dir,
    extension: edge.node.extension,
    relativePath: edge.node.relativePath,
    src: imageSrcOrNull(edge.node)
  }));

const fileIsOfDesign = design => file => file.dir.includes(design);

const designImages = files => files.filter(file => file.extension !== TEXT);

const designMarkdown = (markdownList, design) =>
  markdownList.find(file => file.path.includes(design));

const designTitle = (markdownList, design) => {
  const markdown = designMarkdown(markdownList, design);
  if (markdown) {
    return markdown.title;
  }
  return null;
};

const designDescription = (markdownList, design) => {
  const markdown = designMarkdown(markdownList, design);
  if (markdown) {
    return markdown.content;
  }
  return null;
};

const categoryDesigns = (category, imageFiles, markdowns) => {
  const designList = designsByCategory(imageFiles, category);
  const markdownList = markdownByCategory(markdowns, category);

  const temp = designList.map(design => ({
    design,
    images: designImages(imageFiles.filter(fileIsOfDesign(design))),
    description: designDescription(markdownList, design),
    title: designTitle(markdownList, design)
  }));
  return temp;
};

const markdownFiles = edges =>
  edges.map(({ node }) => ({
    content: node.html,
    path: node.fileAbsolutePath,
    title: node.frontmatter.title
  }));

export const designCategories = (imageEdges, markdownEdges) => {
  const imageFiles = designFiles(imageEdges);
  const markdown = markdownFiles(markdownEdges);

  return categoryList.reduce((designCategories, category) => {
    designCategories[category] = {
      designs: categoryDesigns(category, imageFiles, markdown)
    };
    return designCategories;
  }, {});
};
