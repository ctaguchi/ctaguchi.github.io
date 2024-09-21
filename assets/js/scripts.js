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
}`,
    taguchi_saransig_2024_non: String.raw`@inproceedings{taguchi-saransig-2024-non,
    title = "Non-discourse configurationality in {I}mbabura {K}ichwa",
    author = {Taguchi, Chihiro and Saransig, Jefferson},
    year = "2024",
    booktitle = {Proceedings of the Linguistic Society of America},
    volume = {9},
    number = {1},
    pages = "5687",
}`,
    taguchi_etal_2023_universal: String.raw`@inproceedings{taguchi-etal-2023-universal-automatic-phonetic,
    author = {Taguchi, Chihiro and
              Sakai, Yusuke and
              Haghani, Parisa and
              Chiang, David},
    title = {Universal Automatic Phonetic Transcription into the {I}nternational {P}honetic {A}lphabet},
    booktitle = {Proceedings of {INTERSPEECH} 2023},
    year = {2023},
    pages = {2548-2552},
    doi = {10.21437/Interspeech.2023-2584}
}`,
    miyagawa_etal_2023_okinawago: String.raw`@inproceedings{miyagawa-etal-2023-okinawago,
    author = {Miyagawa, So and Kanayama, Hiroshi and Taguchi, Chihiro and Tohyama, Nana},
    title = {沖縄語の{U}niversal {D}ependenciesツリーバンクコーパスの構築},
    booktitle = {Proceedings of the Twenty-ninth Annual Meeting of the Association for Natural Language Processing},
    year = "2023"
}`,
    taguchi_miyagawa_2023_keitairon: String.raw`@inproceedings{taguchi-miyagawa-2023-keitairon,
    author = {Taguchi, Chihiro and Miyagawa, So},
    title = {形態論情報付き日本語{U}niversal {D}ependencies},
    booktitle = {Proceedings of the Twenty-ninth Annual Meeting of the Association for Natural Language Processing},
    year = "2023"
}`,
    taguchi_chiang_2023_introducing: String.raw`@inproceedings{taguchi-chiang-2023-introducing,
    title = "Introducing Morphology in {U}niversal {D}ependencies {J}apanese",
    author = "Taguchi, Chihiro  and
      Chiang, David",
    editor = {Grobol, Lo{\"\i}c  and
      Tyers, Francis},
    booktitle = "Proceedings of the Sixth Workshop on Universal Dependencies (UDW, GURT/SyntaxFest 2023)",
    month = mar,
    year = "2023",
    address = "Washington, D.C.",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2023.udw-1.8",
    pages = "65--72"
}`,
    taguchi_2022_mermaid: String.raw`@inproceedings{taguchi-2022-mermaid,
    title = "{M}ermaid {C}onstructions in {L}exical {F}unctional Grammar",
    author = "Taguchi, Chihiro",
    editor = {Batt, Miriam and Findlay, Jamie Y. and Toivonen, Ida},
    booktitle = {The Proceedings of the LFG'22 Conference},
    year = "2022",
    month = dec,
    publisher = "The LFG proceedings",
    url = "https://lfg-proceedings.org/lfg/index.php/main/article/view/19"
}`,
    taguchi_etal_2022_universal: String.raw`@inproceedings{taguchi-etal-2022-universal,
    title = "{U}niversal {D}ependencies Treebank for {T}atar: Incorporating Intra-Word Code-Switching Information",
    author = "Taguchi, Chihiro  and
      Iwata, Sei  and
      Watanabe, Taro",
    editor = "Ojha, Atul Kr.  and
      Ahmadi, Sina  and
      Liu, Chao-Hong  and
      McCrae, John P.",
    booktitle = "Proceedings of the Workshop on Resources and Technologies for Indigenous, Endangered and Lesser-resourced Languages in Eurasia within the 13th Language Resources and Evaluation Conference",
    month = jun,
    year = "2022",
    address = "Marseille, France",
    publisher = "European Language Resources Association",
    url = "https://aclanthology.org/2022.eurali-1.17",
    pages = "95--104"
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
