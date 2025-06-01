### Zonder Bootstrap (in body)

```
header+main+footer
```

### Met Bootstrap (in body)
```
html:5>(header>nav)+main+footer
```

### accordion
```
html:5>(header>nav)+main>(div.accordion#accordionExample>(div.accordion-item>h2.accordion-header>button.accordion-button[type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"]{Accordion Item #1}+div#collapseOne.accordion-collapse.collapse.show[data-bs-parent="#accordionExample"]>div.accordion-body{Accordion body content})*2)+footer
```
#### met afbeelding:
```
html:5>(header>nav)+main>(div.accordion#accordionExample>(div.accordion-item>h2.accordion-header>button.accordion-button[type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"]{Accordion Item #1}+div#collapseOne.accordion-collapse.collapse.show[data-bs-parent="#accordionExample"]>div.accordion-body>img[src="https://via.placeholder.com/150" alt="Accordion afbeelding"]+p{Accordion body content})+(div.accordion-item>h2.accordion-header>button.accordion-button.collapsed[type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"]{Accordion Item #2}+div#collapseTwo.accordion-collapse.collapse[data-bs-parent="#accordionExample"]>div.accordion-body>img[src="https://via.placeholder.com/150" alt="Accordion afbeelding"]+p{Accordion body content}))+div.card[style="width: 18rem;"]>img.card-img-top[src="https://via.placeholder.com/286x180" alt="Card afbeelding"]+div.card-body>h5.card-title{Card title}+p.card-text{Some quick example text.}+a.btn.btn-primary[href="#"]{Go somewhere}+footer
```

### card
```
html:5>(header>nav)+main>(div.accordion#accordionExample>(div.accordion-item>h2.accordion-header>button.accordion-button[type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"]{Accordion Item #1}+div#collapseOne.accordion-collapse.collapse.show[data-bs-parent="#accordionExample"]>div.accordion-body{Accordion body content})*2)+footer
```



#### 1 lijn voor 1 accordion-item met 1 afbeelding:

```
div.accordion#accordionExample>(div.accordion-item>h2.accordion-header#headingOne>button.accordion-button[type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"]{Accordion Item #1}+div#collapseOne.accordion-collapse.collapse.show[aria-labelledby="headingOne" data-bs-parent="#accordionExample"]>div.accordion-body>img[src="https://via.placeholder.com/150" alt="Accordion afbeelding"]+p{Accordion body content})
```
#### 1 lijn voor 1 card met 1 afbeelding:

```
div.card[style="width: 18rem;"]>img.card-img-top[src="https://via.placeholder.com/286x180" alt="Card afbeelding"]+div.card-body>h5.card-title{Card title}+p.card-text{Some quick example text.}+a.btn.btn-primary[href="#"]{Go somewhere}
```