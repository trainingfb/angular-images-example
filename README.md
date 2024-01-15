```
npx -p @angular/cli@latest ng new angular-demo -s -t -S
```

npx run build


2. creare il repository

```
git add .
git commit -m "first commit"
git remote add origin git@github.com:fabiobiondi/angular-demo.git
 git push -u origin main     
``` 

3. Install github pages for angular

```
npm i angular-cli-ghpages -D
```

4.Avviare ngh da terminale

Se andiamo su github si vedrà il branch ghpages

ma viene deployata la carta /dist

Infatti dovremmo visitare la pagina a:

https://fabiobiondi.github.io/angular-demo/angular-demo/browser


5. Noi vogliamo deployare la root `dist/angular-demo/browser`

```   
ngh --dir=dist/angular-demo/browser
```


https://fabiobiondi.github.io/angular-demo/

1. Create the build


Se andiamo su github si vedrà il branch


2. Deploy
ng build --base-href "https://fabiobiondi.github.io/angular-demo/"
