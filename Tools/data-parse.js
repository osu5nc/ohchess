Papa.parse(`Ranking,Name,Rating
1,"SHEN,CHRISTOPHER",2410
2,"SEDLAR,WILLIAM JO",2396
3,"WANG,JASON",2388
4,"SHRIWAS,PRATIK",2377
5,"GRIGGS,WALKER KYL",2376
6,"JAYARAMAN,ARVIND",2370
7,"WANG,EIGEN",2354
8,"RAMER,SCOTT",2347
9,"BAKER,VINCENT JIN",2327
10,"FENG,MAGGIE",2325
11,"HUGHES,JOHN LODGE",2314
12,"AHLBORG,JOHN",2277
13,"LIU,ARISTO S",2269
14,"CLAYTON,RYAN DANI",2265
15,"CAO,ELTON",2256
16,"CHIRU,EDUARD",2248
17,"WEAVER,BENJAMIN W",2238
18,"STORN,JUSTIN THOM",2226
19,"MURTHY,PAPPU LN",2222
20,"KEUCHEL,DESTYNN",2212
21,"WRIGHT,WILLIAM B",2211
22,"RANDOLPH,JOHN B",2205
23,"ALLEN,DAVID",2200
24,"BENNETT,ALLAN D",2200
25,"BERCHENKO,SERGEY",2200
26,"DIEBERT,CHARLES M",2200
27,"MULTHOPP,HANS",2200
28,"SEWARD,STEVEN C",2200
29,"KELLEY,DESHAWN",2189
30,"JOELSON,MICHAEL",2186
31,"BEATREZ,PATRICK L",2184
32,"MODLIN,TREY",2175
33,"STEEN,BOBBY",2166
34,"WILSON,RUSSELL",2153
35,"JAFFE,JOEL GRANT",2137
36,"TAN,RALPH",2126
37,"RAMASWAMY,ABHINAV",2112
38,"BALYAN,ARYAN SING",2110
39,"MILLER,JOHN",2105
40,"CASDEN,ALAN",2104
41,"KOWALYSKO,ROMAN",2090
42,"SAMPATH,AJA",2090
43,"BATH,JOHN",2082
44,"CLOS,TIMOTHY",2082
45,"ALLEN,ZACHARY JOH",2075
46,"KEUCHEL,CONNOR",2074
47,"KEUCHEL,BRENNEN",2071
48,"AL-SHAMI,BEN",2068
49,"METRIK,JEREMY HUN",2054
50,"HART,BRAEDEN",2051`, {
	complete: function(results) {
        console.log("Finished:", results.data);
        
	}
});