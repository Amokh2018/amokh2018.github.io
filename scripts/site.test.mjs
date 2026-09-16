import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const pages=['index.html','projects.html','teaching.html','consultancy.html'];
for(const page of pages)test(`Published ${page} has complete content and valid local destinations`,async()=>{
 const html=await readFile(resolve(root,page),'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,'one primary heading');
 assert.match(html,/<main/);assert.match(html,/id="contact"/);
 assert.equal(html,await readFile(resolve(root,'.build',page),'utf8'),'published page matches build');
 const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'unique element IDs');
 for(const [,ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(https?:|mailto:|data:|tel:)/.test(ref))continue;
  const url=new URL(ref,'https://portfolio.test/'+page);
  const pathname=url.pathname==='/'?'/index.html':decodeURIComponent(url.pathname);
  const target=resolve(root,'.'+pathname);await access(target);
  if(url.hash && pathname.endsWith('.html')){const dest=await readFile(target,'utf8');assert.ok(dest.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),`missing anchor ${ref}`)}
 }
});
