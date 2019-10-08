const parseTop50 = (data) => {
	let html = `<table cellspacing="0" cellpadding="0">
		<col width="66">
		<col width="173">
		<col width="66">`;
	for(let i=0; i< data.length; i++){
		html += `\n\t<tr>\n\t\t<td width="66">${data[i][0]}</td>`
		html += `\n\t\t<td width="173">${data[i][1]}</td>`
		html += `\n\t\t<td width="66">${data[i][2]}</td>\n\t</tr>`
	}
	html += `\n</table>`;
	console.log(html);
};

const parseTop50Qualified = (data) => {
	let html = `<table cellspacing="0" cellpadding="0">
		<col width="66">
		<col width="173">
		<col width="66">
		<col width="66">`;
	for(let i=0; i< data.length; i++){
		html += `\n\t<tr>\n\t\t<td width="66">${data[i][0]}</td>`
		html += `\n\t\t<td width="173">${data[i][1]}</td>`
		html += `\n\t\t<td width="66">${data[i][2]}</td>`
		html += `\n\t\t<td width="66">${data[i][3]}</td>\n\t</tr>`
	}
	html += `\n</table>`;
	console.log(html);
};

const parseOcaMembers = (data) => {
	let html = `<table xmlns="http://www.w3.org/1999/xhtml" cellspacing="0" cellpadding="0" dir="ltr" border="1">
	<colgroup>
	  <col width="197"/>
	  <col width="100"/>
	  <col width="100"/>
	  <col width="100"/>
	  <col width="100"/>
	  <col width="100"/>
	  <col width="100"/>
	  <col width="100"/>
	  <col width="160"/>
	  <col width="100"/>
	  </colgroup>
	<tbody>`;
	for(let i=0; i< data.length; i++){
		html += `\n\t<tr>\n\t\t<td width="197">${data[i][0]}</td>`
		html += `\n\t\t<td width="100">${data[i][1]}</td>`
		html += `\n\t\t<td width="100">${data[i][2]}</td>`
		html += `\n\t\t<td width="100">${data[i][3]}</td>`
		html += `\n\t\t<td width="100">${data[i][4]}</td>`
		html += `\n\t\t<td width="100">${data[i][5]}</td>`
		html += `\n\t\t<td width="100">${data[i][6]}</td>`
		html += `\n\t\t<td width="100">${data[i][7]}</td>`
		html += `\n\t\t<td width="160">${data[i][8]}</td>`
		html += `\n\t\t<td width="100">${data[i][9]}</td>\n\t</tr>`
	}
	html += `\n</tbody>\n</table>`;
	console.log(html);
};

Papa.parse(`1,"WANG,JASON",2422
2,"SEDLAR,WILLIAM JO",2404
3,"SHEN,CHRISTOPHER",2390
4,"BLOCKER,CALVIN",2384
5,"SHRIWAS,PRATIK",2379
6,"GRIGGS,WALKER KYL",2376
7,"BOOR,CARL",2368
8,"WANG,EIGEN",2366
9,"JAYARAMAN,ARVIND",2352
10,"RAMER,SCOTT",2345
11,"SPAQI,WILSON",2340
12,"BAKER,VINCENT JIN",2320
13,"HUGHES,JOHN LODGE",2314
14,"AHLBORG,JOHN",2300
15,"FENG,MAGGIE",2288
16,"CAO,ELTON",2284
17,"LIU,ARISTO S",2269
18,"CLAYTON,RYAN DANI",2268
19,"CHIRU,EDUARD",2248
20,"WEAVER,BENJAMIN W",2238
21,"MULTHOPP,HANS",2219
22,"STORN,JUSTIN THOM",2214
23,"KELLEY,DESHAWN",2213
24,"KEUCHEL,DESTYNN",2212
25,"SEWARD,STEVEN C",2211
26,"MURTHY,PAPPU LN",2209
27,"WRIGHT,WILLIAM B",2209
28,"DIEBERT,CHARLES M",2207
29,"BERCHENKO,SERGEY",2206
30,"ALLEN,DAVID",2200
31,"BENNETT,ALLAN D",2200
32,"RANDOLPH,JOHN B",2200
33,"JOELSON,MICHAEL",2188
34,"WILSON,RUSSELL",2174
35,"MODLIN,TREY",2169
36,"JAFFE,JOEL GRANT",2153
37,"STEEN,BOBBY",2153
38,"SRIVASTAVA,VIKRAM",2145
39,"BEATREZ,PATRICK L",2134
40,"RAMASWAMY,ABHINAV",2129
41,"TAN,RALPH",2117
42,"CASDEN,ALAN",2112
43,"MILLER,JOHN",2099
44,"BALYAN,ARYAN SING",2097
45,"PAGANINI,XAVIER N",2095
46,"KOWALYSKO,ROMAN",2093
47,"PASSEN,BRETT",2087
48,"SAMPATH,AJA",2085
49,"COHEN,JOHN",2077
50,"ALLEN,ZACHARY JOH",2075`, {
	complete: function(results) {
		console.log("Finished:", results.data);
		parseTop50(results.data);
		// parseTop50Qualified(results.data);
		// parseOcaMembers(results.data);
	}
});

