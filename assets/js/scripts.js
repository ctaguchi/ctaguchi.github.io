/* assets/js/scripts.js */
const bibtexSnippets = {
    taguchi_chiang_2024_language: `@inproceedings{taguchi-chiang-2024-language,
title = "Language Complexity and Speech Recognition Accuracy: Orthographic Complexity Hurts, Phonological Complexity Doesn{'}t",
author = "Taguchi, Chihiro and Chiang, David",
editor = "Ku, Lun-Wei and Martins, Andre and Srikumar, Vivek",
booktitle = "Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
month = aug,
year = "2024",
address = "Bangkok, Thailand",
publisher = "Association for Computational Linguistics",
url = "https://aclanthology.org/2024.acl-long.827",
pages = "15493--15503"
}`,
    matogawa_etal_2024_japanese: String.raw`@inproceedings{matogawa-etal-2024-japanese,
    title = "{J}apanese Rule-based Grapheme-to-phoneme Conversion System and Multilingual Named Entity Dataset with International Phonetic Alphabet",
    author = "Matogawa, Yuhi and Sakai, Yusuke and Watanabe, Taro and Taguchi, Chihiro",
    editor = {Nicolai, Garrett and Chodroff, Eleanor and Mailhot, Frederic and {\c{C}}{\"o}ltekin, {\c{C}}a{\u{g}}r{\i}},
    booktitle = "Proceedings of the 21st SIGMORPHON workshop on Computational Research in Phonetics, Phonology, and Morphology",
    month = jun,
    year = "2024",
    address = "Mexico City, Mexico",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2024.sigmorphon-1.9",
    doi = "10.18653/v1/2024.sigmorphon-1.9",
    pages = "77--86",
}`,
    taguchi_etal_2024_killkan: `@inproceedings{taguchi-etal-2024-killkan,
    title = "Killkan: The Automatic Speech Recognition Dataset for Kichwa with Morphosyntactic Information",
    author = "Taguchi, Chihiro and Saransig, Jefferson and Vel{\\'a}squez, Dayana and Chiang, David",
    editor = "Calzolari, Nicoletta and Kan, Min-Yen and Hoste, Veronique and Lenci, Alessandro and Sakti, Sakriani and Xue, Nianwen",
    booktitle = "Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)",
    month = may,
    year = "2024",
    address = "Torino, Italia",
    publisher = "ELRA and ICCL",
    url = "https://aclanthology.org/2024.lrec-main.852",
    pages = "9753--9763"
}`,
    aoyama_etal_2024_jsnacs: `@inproceedings{aoyama-etal-2024-j,
    title = "{J}-{SNACS}: Adposition and Case Supersenses for {J}apanese Joshi",
    author = "Aoyama, Tatsuya and Taguchi, Chihiro and Schneider, Nathan",
    editor = "Calzolari, Nicoletta and Kan, Min-Yen and Hoste, Veronique and Lenci, Alessandro and Sakti, Sakriani and Xue, Nianwen",
    booktitle = "Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)",
    month = may,
    year = "2024",
    address = "Torino, Italia",
    publisher = "ELRA and ICCL",
    url = "https://aclanthology.org/2024.lrec-main.839",
    pages = "9604--9614"
}`,
    washington_etal_2024_strategies: `@inproceedings{washington-etal-2024-strategies,
    title = "Strategies for the Annotation of Pronominalised Locatives in {T}urkic {U}niversal {D}ependency Treebanks",
    author = {Washington, Jonathan  and
      {\\c{C}}{\\"o}ltekin, {\\c{C}}a{\\u{g}}r{\\i}  and
      Akkurt, Furkan  and
      Chontaeva, Bermet  and
      Eslami, Soudabeh  and
      Jumalieva, Gulnura  and
      Kasieva, Aida  and
      Kuzgun, Asl{\i}  and
      Mar{\\c{s}}an, B{\\"u}{\\c{s}}ra  and
      Taguchi, Chihiro},
    editor = {Bhatia, Archna  and
      Bouma, Gosse  and
      Do{\\u{g}}ru{\\"o}z, A. Seza  and
      Evang, Kilian  and
      Garcia, Marcos  and
      Giouli, Voula  and
      Han, Lifeng  and
      Nivre, Joakim  and
      Rademaker, Alexandre},
    booktitle = "Proceedings of the Joint Workshop on Multiword Expressions and Universal Dependencies (MWE-UD) @ LREC-COLING 2024",
    month = may,
    year = "2024",
    address = "Torino, Italia",
    publisher = "ELRA and ICCL",
    url = "https://aclanthology.org/2024.mwe-1.25",
    pages = "207--219",
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
