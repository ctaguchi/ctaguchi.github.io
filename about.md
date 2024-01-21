---
layout: post
lang: en
date: 
title: About my research
---

# What do I do?
My research interests are languages.
I study them with two (very) different approaches: (theoretical) linguistics and natural language processing.
With linguistics, I try to see what the internal structures of languages would look like.
In particular, I am working on the structure of sentences (syntax) with formal frameworks such as Minimalist syntax (transformational grammar) and Lexical Functional Grammar (non-transformational grammar).
To be honest, I am agnostic as to whether theoretical artefacts such as "syntactic movement" really physically happen in our mind/brain, but the liguistics literature has had a massive amount of (counter-)arguments about them, and for now I stand on the shoulder of giants.

While working on languages from the internal side, I am also interested in languages from external aspects, namely, how languages can be modeled (by machines).
How different linguistic components such as phonology, morphology, syntax, and semantics can be represented or learned by models?
Would they look like how we learn languages?
Would they do better than us?
I am also working on the application side, especially on using AI-based models to facilitate and accelerate documentation of endangered languages by automation.

## Natural Language Processing
My PhD dissertation project is on language documentation with applied NLP technologies.
Languages that need to be documented are, in most cases, endangered; younger generations tend to speak only the "majority" language in the society (be it economical, political, or educational) without learning the community's language, while the speakers are getting old.
It would be very nice if we can just apply NLP to such languages like magic, but sadly, most machine-learning-based technologies rely on sizable training data, and successful language models are trained on a massive, really massive amount of data.
As you can imagine, most endangered languages do not have such resources, since the number of speakers are decreasing; what's more, it is not so uncommon that they are not written at all or did not have a writing system until recently.
For this reason, the biggest problem that I have to tackle in this project is the "low-resource" problem.
I believe that there are two possible ways to approach the problem.
1. Develop a new model architecture that also works well with low-resource languages.
2. Develop language resources to increase data.

Also, human languages are not one-dimensional.
When we communicate with languages,

1. We speak or sign what we want to say (*phonetics*), 
2. or we can also write down the idea (*orthography*),
3. then the listener recognizes the uttered speech or sign (*phonology*),
4. recognizes meaningful parts of the sentence (*morphology*),
5. grasps the structure of the sentence (*syntax*),
6. and understands the meaning of the sentence (*semantics*).

I aim (ambitiously) to cover these facets of languages in my PhD project hopefully.
As of now (January 2024), I have worked on phonetics and phonology parts, and am moving forward to interesting topics on morphology for documenting endangered languages.
I have also created the first dataset and the first automatic speech recognition model for the Kichwa language, an indigenous language of the Kichwa people mainly spoken in Ecuador, South America.

## Linguistics
In linguistics, I am especially interested in how sentences are structured and how we can describe the structure systematically.
During my master's in lingustics at Edinburgh, I investigated intriguing constructions found in the Tatar language, a Turkic language mainly spoken in Tatarstan, Russia.
In Tatar, there are noun predicates that can take an infinitival phrase and the (apparent) subject with non-nominative case-marking.

- Maratqa&nbsp;joqlarğa&nbsp;röxsät<br/>to Marat&nbsp;to sleep&nbsp;permission<br/>'Marat is allowed to sleep.' (lit. 'It is a permission to sleep to Marat')

When you look at the literal translation of the Tatar sentence above, it simply does not make sense.
Also, there are more puzzles in this type of construction.
First, what is the subject in the sentence? Is it the dative argument, or the infinitival phrase, or there is no subject at all?
Second, how can a noun like 'permission' have a modal meaning like 'to be allowed, may, can'?
In many languages including English, such modal expressions are done by auxiliaries, verbs, and adjectives, but why a noun here?
Third, as far as I know, there are only four or five nouns that can make a sentence like this.
Why is the construction so lexically restricted?
I have not found a satisfying answer to these questions yet, but I plan to keep working on them.

In my most recent work, I investigated the (seemingly) free word order of the Kichwa language.
English has a very rigid order when it comes to the position of a subject (S), an object (O), and a verb (V).
In contrast, Kichwa allows you to make a sentence in SOV, SVO, VSO, OSV, OVS, and VOS (any order...?).
The question here is, is Kichwa really a free word order language?
If so, its syntactic structure would look very flat, unlike the mainstream assumptions made in Minimalist syntax with binary-branching hierarchical syntactic trees.
If that's actually not the case, how can we account for the syntactic variations of Kichwa with the existing theories?