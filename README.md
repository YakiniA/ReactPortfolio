## Portfolio

This assignment mainly focuses on creating portfolio using React. The web application is primarily developed by using Bootstrap and responsive view achieved by using media queries as needed. Implemented exactly the old portfolio done using HTML, CSS in React by breaking up application's UI into components and used state to update the project details.

### Description

* Breaking the functionality into Components so that for reusing across multiple poages. 
* Maintained the project component, where dynamic rendering of information is done with the help of projects.json file and that will be used multiple times on a single page.
* Used the Hash Router for routing.

### Challenges Faced

* Faced challenge while doing dynamic rendering. After browsing, figured out an easy way to loop through two different array with the help of `lodash`.
* In old portfolio using HTML, easily navigate to particular section of page using `href = #home` but in react it is difficult and is achieved with the help of `react-router-hash-link` library.

#### Screenshots

<p style ="text-align:center;">
<img src="img/snip1.png" width="380" alt= "AboutPage" height="350"/>
<img src="img/snip2.png"  width="380" alt="Portfolio Page" height="350"/>
<img src="img/snip3.png" width="380" alt="Projects Page" height="350"/>
<img src="img/snip4.png"  width="380" alt="Contact Page" height="350"/>
</p>

Here's the link to my developed Website : [React-Portfolio](https://yakinia.github.io/ReactPortfolio/)

##### References

Bootstrap : [Bootstrap Documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/)<br/>
W3Schools : [W3Schools-ForStyling](https://www.w3schools.com/css/css_howto.asp)<br/>
Youtube video : [Youtube video](https://www.youtube.com/watch?time_continue=122&v=Zn64_IVLO88&feature=emb_title)
Stack Overflow : [Stack Overflow-Link to same page](https://stackoverflow.com/questions/35978489/how-to-link-to-same-page)<br/>
Stack Overflow : [Map two arrays at same time](https://stackoverflow.com/questions/41311322/how-can-i-map-over-two-arrays-at-the-same-time)<br/>
Stack Overflow : [Collapse Navbar in React](https://stackoverflow.com/questions/52248179/how-to-use-data-toggle-collapse-in-reactjs-with-bootstrap)
