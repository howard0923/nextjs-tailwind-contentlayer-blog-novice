import { allPosts, Post } from 'contentlayer/generated';
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';

import { compareDesc } from 'date-fns'; 
// 這是一個用來比較日期的方法，可以用來判斷哪一個日期比較早或比較晚。

export { allPosts, defineDocumentType, defineNestedType, makeSource, Post };


export const allPostsNewToOld =
  allPosts?.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  }) || [];
// 為了避免 allPosts 為空或未定義的情況，這個程式碼使用了短路運算符 ||，如果 allPosts 為空或未定義，就返回一個空陣列 []。