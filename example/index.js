/**
 * es modules import with default and destructuring
 */
import getblogs, { devto, medium, hashnode } from "getblogs";

console.log(getblogs);
// output
// {
//     devto: { getBlogPosts: [AsyncFunction: i] },
//     hashnode: { getBlogPosts: [AsyncFunction: n] },
//     medium: { getBlogPosts: [AsyncFunction: s] }
// }

console.log(devto);
// output
// { getBlogPosts: [AsyncFunction: i] }

console.log(medium);
// output
// { getBlogPosts: [AsyncFunction: s] }

console.log(hashnode);
// output
// { getBlogPosts: [AsyncFunction: n] }
