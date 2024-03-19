function searchWord() {
    var paragraph = document.getElementById('paragraph').value;
    var searchWord = document.getElementById('searchWord').value.toLowerCase();
    var result = document.getElementById('result');

    if (paragraph && searchWord) {
        // Create a regular expression with the search word and the 'gi' flags for case-insensitive and global search
        var regex = new RegExp(searchWord, 'gi');

        // Use replace() method with the regular expression to replace all occurrences of the word with highlighted version
        var highlightedParagraph = paragraph.replace(regex, '<span class="highlight">$&</span>');

        result.innerHTML = highlightedParagraph;
    } else {
        result.textContent = "Please enter a paragraph and a word to search.";
    }
}
