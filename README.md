# Markdown Notes

With this React app you can create and manage a list of notes in Markdown. Edit, delete, update and preview how your notes would look in HTML.
The list is auto-saved in local storage so your work will survive a page refresh.

React features used in the app:
- Using 3rd party libraries along with React was a first for me, working through incompatibility between package with different versions and then bundling issues when deploying helped give me a better idea of things to be expected when working with a more realistic code base
- **useState** hook allows the notes to persist, saving them in state
- **useEffect** hook permits the auto-save feature, it keeps localStorage up to date with any edits made
- React **props** allow the app to dynamically update, one specific example would be the active(highlighted) note feature, clicking on a note from the side list switches it to be the currently active note and displays that note's contents in the editing pane 
 

## Dependencies :

The project integrates a few npm packages outside of React/ReactDOM

-   React MDE, a Markdown editor turned into React component : [npmjs.com/package/react-mde](https://www.npmjs.com/package/react-mde)
-   Showdown, a popular Markdown to HTML converter: [npmjs.com/package/showdown](https://www.npmjs.com/package/showdown)
-   React Split, a component which creates a resizable split-view: [npmjs.com/package/react-split](https://www.npmjs.com/package/react-split)
-   Nanoid, a unique string generator: [npmjs.com/package/nanoid](https://www.npmjs.com/package/nanoid)


# 

What started as a course refactoring/feature add challenge turned into a project created from scratch. Now I use this app personally as a simple Markdown editor when I write and format documentation and preview Readmes for Github.

A deployed version of this app can be found [here](https://react-markdown-notes.netlify.app/)
