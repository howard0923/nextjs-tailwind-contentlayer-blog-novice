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
// allPosts 可能為 undefined 或 null或一個空陣列，如果直接對它使用 sort 方法，就會出現錯誤。使用可選鏈接運算符 allPosts?.sort() 可以保證只有在 allPosts 不為 undefined 或 null 的情況下才會調用 sort 方法，否則整個表達式的值會是 `undefined`.sort 方法對於空陣列的調用是沒有作用的。使用可選鏈接運算符可以讓這個表達式返回一個空陣列，而不是 undefined。
