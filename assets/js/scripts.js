/* assets/js/scripts.js */
const bibtexSnippets = {
    taguchi-chiang-2024-language: `@inproceedings{taguchi-chiang-2024-language,
title = "Language Complexity and Speech Recognition Accuracy: Orthographic Complexity Hurts, Phonological Complexity Doesn{'}t",
author = "Taguchi, Chihiro and Chiang, David",
editor = "Ku, Lun-Wei and Martins, Andre and Srikumar, Vivek",
booktitle = "Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
month = aug,
year = "2024",
address = "Bangkok, Thailand",
publisher = "Association for Computational Linguistics",
url = "https://aclanthology.org/2024.acl-long.827",
pages = "15493--15503",
abstract = "We investigate what linguistic factors affect the performance of Automatic Speech Recognition (ASR) models. We hypothesize that orthographic and phonological complexities both degrade accuracy. To examine this, we fine-tune the multilingual self-supervised pretrained model Wav2Vec2-XLSR-53 on 25 languages with 15 writing systems, and we compare their ASR accuracy, number of graphemes, unigram grapheme entropy, logographicity (how much word/morpheme-level information is encoded in the writing system), and number of phonemes. The results demonstrate that a high logographicity correlates with low ASR accuracy, while phonological complexity has no significant effect.",
}`
};

// Function to show BibTeX in modal
function showBibtex(bibtexId) {
  document.getElementById('bibtex-content').innerText = bibtexSnippets[bibtexId];
  document.getElementById('bibtex-modal').style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById('bibtex-modal').style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('bibtex-modal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
