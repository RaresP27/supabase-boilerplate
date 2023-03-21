import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://eyepipihjevcnccdmxha.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5ZXBpcGloamV2Y25jY2RteGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3NTY5NjQsImV4cCI6MTk5NDMzMjk2NH0.XPXWbhHbrD7v4JmHV8mlAivBsbnPCyxFEIRjplpY4Wg'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: Books, error } = await supabase
  .from('Books')
  .select('*')

  for (let book of Books) {
    let bookList = document.getElementById('Books');
    bookList.innerHTML += `<li>${book.title} - ${book.author} : ${book.isbn} - ${book.description}</li>`;
  } 
  }
  getBooks();