function generateIdFromText(str: string) {
  return str
    .toLowerCase()
    .replace(/^\s+|\s+$/g, "")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export { generateIdFromText };
