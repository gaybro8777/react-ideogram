(this["webpackJsonpideogram-react"]=this["webpackJsonpideogram-react"]||[]).push([[0],{30:function(e,a,t){e.exports=t(42)},35:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(24),i=t.n(o),l=(t(35),t(2)),s=t(3),c=t(5),m=t(4),u=t(6),h=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},"This will show cards as in https://eweitz.github.io/ideogram.",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/react-ideogram/human"},"Human")),r.a.createElement("li",null,r.a.createElement("a",{href:"/react-ideogram/mouse"},"Mouse")),r.a.createElement("li",null,r.a.createElement("a",{href:"/react-ideogram/eukaryotes"},"Eukaryotes"))))}}]),a}(n.Component),d=t(1),p=t(15);function g(e){return{human:r.a.createElement("div",null,r.a.createElement("p",null,"A human genome is depicted below.  The grey and black bands in each chromosome represent  "," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Heterochromatin"},"heterochromatin"),". The pink region is the area around the "," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Centromere"},"centromere"),", and the blue represents variable regions."),r.a.createElement("p",null,"This ideogram shows most chromosomes in a "," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Ploidy"},"haploid")," state for "," ","simplicity.  For more accurate, diploid representation of human genomes, "," ","see ",r.a.createElement("a",{href:"ploidy-basic"},"Ploidy, basic")," and "," ",r.a.createElement("a",{href:"multiple-trio"},"Multiple, trio"),".")),mouse:r.a.createElement("div",null,r.a.createElement("p",null,"A mouse genome, with each chromosome rendered horizontally.")),eukaryotes:r.a.createElement("div",null,r.a.createElement("p",null,"Ideogram.js can display the genome of any hundreds of organisms, "," ","using data from ",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/assembly"},"NCBI Assembly"),".")),orthologs:r.a.createElement("div",null,r.a.createElement("p",null,"Compare gene locations across organisms.")),"homology-basic":r.a.createElement("div",null,r.a.createElement("p",null,"Pseudoautosomal regions (PAR) are the only parts of chromosomes X and Y that typically undergo genetic recombination.  PAR1 and PAR2 are depicted below.  See also ",r.a.createElement("a",{href:"homology-advanced"},"Compare, structure"),".")),"homology-advanced":r.a.createElement("div",null,r.a.createElement("p",null,"Large-scale insertions, deletions, and inversions are represented below. Focus on a particular large variation by clicking or hovering over a colored region.")),"annotations-basic":r.a.createElement("div",null,r.a.createElement("p",null,"The location of ",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/gene/672"},"BRCA1")," is depicted here in red.")),"annotations-overlaid":r.a.createElement("div",null,r.a.createElement("p",null,"Large-scale structural variations (SVs) can be depicted using colored overlays, as seen below.")),"annotations-tracks":r.a.createElement("div",null,r.a.createElement("p",null,"1000 ",r.a.createElement("a",{href:"https://github.com/eweitz/ideogram/blob/ca64a3c51e1b5ecaae89d2422ffc408565743644/scripts/create_annots.py#L68"},"randomly generated")," SNVs across the human genome. See also ",r.a.createElement("a",{href:"annotations-track-filters"},"Annotations, track filters"),".")),"annotations-external-data":r.a.createElement("div",null,r.a.createElement("p",null,"The ",r.a.createElement("a",{href:"https://www.acmg.net/"},"American College of Medical Genetics and Genomics")," (ACMG) recommends that laboratories performing clinical sequencing seek and report certain mutations in",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/clinvar/docs/acmg/"},"the genes depicted here."))),"annotations-file-url":r.a.createElement("div",null,r.a.createElement("p",null,"Load a BED file by specifying its URL, and see genome-wide data.",r.a.createElement("a",{href:"?asm=GRCh37&annotsUrl=https://raw.githubusercontent.com/NCBI-Hackathons/Scan2CNV/master/files/201113910010_R08C02.PennCnvOut.bed"},"Example"),".")),"annotations-histogram":r.a.createElement("div",null,r.a.createElement("p",null,"Distribution of all human genes throughout the genome. Filter all 20,000+ genes in < 100 milliseconds below. For a richer example, see ",r.a.createElement("a",{href:"differential-expression"},"Differential expression"),".")),"annotations-animated":r.a.createElement("div",null,r.a.createElement("p",null,"See genome-wide transitions in expression over time. Below, changes in gene expression in mouse lung tissue over two years, in three influenza dosage cohorts.")),"annotations-heatmap":r.a.createElement("div",null,r.a.createElement("p",null,"All human genes, annotated in heatmaps.  The proximal heatmap for each chromosome shows gene distribution by expression.  The distal heatmap shows gene distribution by type.")),"differential-expression":r.a.createElement("div",null,r.a.createElement("p",null)),"geometry-collinear":r.a.createElement("div",null,r.a.createElement("p",null,"Gene expression in four ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Oligodendroglioma"},"brain cancer"),"samples, showing 1p and 19q deletions. Data from ",r.a.createElement("a",{href:"https://github.com/broadinstitute/inferCNV"},"inferCNV"),". Unlike the",r.a.createElement("a",{href:"annotations-heatmap.html"},"parallel arrangement"),", this ideogram is collinear -- the chromosomes form a line together.")),"layout-small":r.a.createElement("div",null,r.a.createElement("p",null,'The small ideogram inset at left is an example of chromosome graphics surrounded by other content.  Instead of meaningless "Lorem ipsum" placeholder text, here is some background on the human reference genome assembly this ideogram depicts.'),r.a.createElement("p",null,'"In 2004, the Human Genome Project (HGP) published a finished version (Build35) of the human genome assembly (1). This was a major accomplishment that represented over a decade of effort by more than a dozen institutions and resulted in the highest quality vertebrate genome ever produced and a new tool for understanding human biology. Despite this achievement, a limited number of gaps, sequence and tiling path errors remained in the reference assembly. Thus, at the conclusion of the HGP and the release of their final assembly version (Build36 (UCSC name: hg18)), the GRC was conceived as a mechanism for continued stewardship and improvement of the human reference assembly."'),r.a.createElement("p",null,'"In 2009, the GRC produced an updated human assembly (GRCh37 (UCSC name: hg19))."  And in 2013, it produced the current major version of the human reference genome assembly, GRCh38.')),"layout-tabs":r.a.createElement("div",null),brush:r.a.createElement("div",null,r.a.createElement("p",null)),"ploidy-basic":r.a.createElement("div",null,r.a.createElement("p",null,'This diploid genome shows maternal ("M") and paternal ("P") chromosomes of a karyotypically normal human female (46,XX).')),"ploidy-rearrangements":r.a.createElement("div",null,r.a.createElement("p",null,"This triploid banana genome is a hybrid of",r.a.createElement("i",null,"Musa acuminata"),' ("A") and ',r.a.createElement("i",null,"Musa balbisiana"),' ("B").',r.a.createElement("br",null),"Chromosomal rearrangements shown below include:",r.a.createElement("ul",null,r.a.createElement("li",null,"Arm gained in a copy of chromosome 1"),r.a.createElement("li",null,"Arm lost in a copy of chromosome 2")))),"ploidy-recombination":r.a.createElement("div",null,r.a.createElement("p",null,"This triploid banana genome is a hybrid of",r.a.createElement("i",null,"Musa acuminata"),' ("A") and ',r.a.createElement("i",null,"Musa balbisiana"),' ("B").',r.a.createElement("br",null),"Recombination events shown below include:",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Gene conversion in a copy of chromosome 1"),r.a.createElement("li",null,"Double crossover in copies of chromosome 2")))),"multiple-trio":r.a.createElement("div",null,r.a.createElement("p",null,"Three diploid human genomes: a female, a male, and another male. See also ",r.a.createElement("a",{href:"multiple-trio-sv"},"Multiple, trio SV"),".")),"multiple-primates":r.a.createElement("div",null,r.a.createElement("p",null,"Two genes are annotated on each genome below: APOB (red) and CTLA4 (blue). Their locations give evidence of ancient chromosome fusions and shared evolutionary origin."))}[e.page]}var E=["human","mouse","eukaryotes"],f={"homology-basic":"Compare PAR"};function b(e,a){var t=E.length;return 0===e&&"prev"===a?(console.log(t),t-1):e===t-1&&"next"===a?0:"next"===a?e+1:"prev"===a?e-1:void 0}var v=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.page,a=function(e){var a=e.slice(1).replace(/-/g," "),t=e[0].toUpperCase()+a;return e in f?f[e]:t}(e),t=function(e){var a=E.indexOf(e),t=b(a,"prev"),n=b(a,"next");return[E[t],E[n]]}(e),n=Object(d.a)(t,2),o=n[0],i=n[1],l="https://github.com/eweitz/ideogram-react/blob/gh-pages/".concat(e,".html");return r.a.createElement("header",null,r.a.createElement("h1",null,a," | Ideogram"),r.a.createElement("a",{href:"/react-ideogram"},"Overview")," | "," ",r.a.createElement(p.b,{to:"/react-ideogram/"+o},"Previous")," |  "," ",r.a.createElement(p.b,{to:"/react-ideogram/"+i},"Next")," |  "," ",r.a.createElement(p.b,{to:l},"Source")," "," ",r.a.createElement(g,{page:e}))}}]),a}(n.Component),y=t(27),w=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"createIdeogram",value:function(){var e=Object.assign({dataDir:"https://unpkg.com/ideogram@1.16.0/dist/data/bands/native/",container:"#ideo-container"},this.props);new y.a(e)}},{key:"componentDidUpdate",value:function(){return this.createIdeogram()}},{key:"componentDidMount",value:function(){return this.createIdeogram()}},{key:"render",value:function(){return r.a.createElement("div",{id:"ideo-container"})}}]),a}(n.Component),k=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{page:"human"}),r.a.createElement(w,{organism:"human"}))}}]),a}(n.Component),C=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{page:"mouse"}),r.a.createElement(w,{organism:"mouse"}))}}]),a}(n.Component),O=[{name:"Model organisms",organisms:[["Rat","Rattus norvegicus"],["Fly","Drosophila melanogaster"],["Worm","Caenorhabditis elegans"],["Zebrafish","Danio rerio"],["Thale cress","Arabidopsis thaliana"],["Yeast","Saccharomyces cerevisiae"]]},{name:"Vertebrates",organisms:[["Chimpanzee","Pan troglodytes"],["Macaque","Macaca mulatta"],["Cat","Felis catus"],["Pig","Sus scrofa"]]},{name:"Plants",organisms:[["Maize","Zea mays"],["Rice","Oryza sativa"],["Tomato","Solanum lycopersicum"],["Banana","Musa acuminata"],["Grape","Vitis vinifera"],["Green algae","Micromonas commoda"]]},{name:"Insects",organisms:[["Mosquito","Anopheles gambiae"]]},{name:"Protozoa",organisms:[["Malaria parasite","Plasmodium falciparum"]]}];var j=function(e){function a(e){var t;Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).handleInputChange=function(e){t.setState({organism:e.target.id}),t.props.history.push({search:"?org="+e.target.id})};var n=t.props.location.search,r=""!==n?n.split("=")[1]:"rattus-norvegicus";t.props.history.push({search:"?org="+r});var o=function(e){var a=400,t=1;return"canis-lupus-familiaris"!==e&&"bos-taurus"!==e&&"gallus-gallus"!==e&&"leishmania-donovani"!==e||(a=200,t=2),[a,t]}(r),i=Object(d.a)(o,2),s=i[0],u=i[1];return t.state={organism:r,chrHeight:s,rows:u},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"eukaryotes-example",className:"App"},r.a.createElement(v,{page:"eukaryotes"}),r.a.createElement("ul",{id:"organism-list"},O.map((function(a){return r.a.createElement("li",{key:"group-"+a.name},a.name,r.a.createElement("ul",null,a.organisms.map((function(a){var t=Object(d.a)(a,2),n=t[0],o=t[1],i=o.replace(/ /g,"-").toLowerCase();return r.a.createElement("li",{key:"organism-"+o},r.a.createElement("label",{htmlFor:i},r.a.createElement("input",{type:"radio",name:"org",value:i,id:i,onChange:e.handleInputChange,checked:e.state.organism===i}),n," (",o,")"))}))))}))),r.a.createElement("div",{id:"container"}),r.a.createElement(w,{container:"#container",organism:this.state.organism,chrWidth:10,chrHeight:this.state.chrHeight,rows:this.state.rows,showNonNuclearChromosomes:!0}))}}]),a}(n.Component),A=(t(41),t(13));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement((function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/react-ideogram"},r.a.createElement(h,null)),r.a.createElement(A.a,{path:"/react-ideogram/human",component:k}),r.a.createElement(A.a,{path:"/react-ideogram/mouse",component:C}),r.a.createElement(A.a,{path:"/react-ideogram/eukaryotes",component:j}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.02702464.chunk.js.map