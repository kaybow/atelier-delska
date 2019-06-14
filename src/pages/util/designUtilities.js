const TEXT = "txt";

const categoryList = ["accessories", "corsetry", "historical", "vintage"];

const designsByCategory = (files, category) =>
  files
    .filter(file => file.dir.includes(category))
    .reduce((directories, file) => {
      const designName = file.dir.substring(
        file.dir.lastIndexOf("/") + 1,
        file.dir.length
      );

      if (!directories.includes(designName)) {
        directories.push(designName);
      }

      return directories;
    }, []);

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

const designDescription = files => files.find(file => file.extension === TEXT);
const designImages = files => files.filter(file => file.extension !== TEXT);

const categoryDesigns = (files, category) => {
  const designList = designsByCategory(files, category);

  return designList.map(design => ({
    design,
    images: designImages(files.filter(fileIsOfDesign(design))),
    description: designDescription(files.filter(fileIsOfDesign(design)))
  }));
};

export const designCategories = edges => {
  const files = designFiles(edges);

  return categoryList.reduce((designCategories, category) => {
    designCategories[category] = {
      designs: categoryDesigns(files, category)
    };
    return designCategories;
  }, {});
};
