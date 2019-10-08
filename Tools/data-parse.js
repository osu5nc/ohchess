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

Papa.parse(`Ranking,Name,Rating,Grade
1,"Cheng, Emma",1897,8
2,"Mohanselvan, Adeti",1779,9
3,"Prabu, Sneha",1721,10
4,"Ma, Samantha",1657,12
5,"Massick, Laine",1645,9
6,"Harper, Alicia",1598,8
7,"Tan, Patricia",1548,5
8,"Babu, Arya",1464,7
9,"Bagley, Hemma Svasti",1361,10
10,"Paruchuri, Deepthisri",1225,7
11,"Hoff-Miyazaki, Zenya",1198,12
12,"Sharma, Arushi",1145,11
13,"Rodgers, Greta",1133,10
14,"Hodges, Alaiah",1121,10
15,"Vollmar, Josi",1115,10
16,"Seethiraju, Srikari",1070,6
17,"Ganga, Harshita",1055,6
18,"Chu, Kaylee",1042,6
19,"Banks, Savannah",1000,9
20,"Kolli, Manoghna",997,6
21,"Lui, Jennifer",979,10
22,"Bagley, Saadhika",976,4
23,"Talla, Saumya",947,8
24,"Gattikoppula, Bhuvandeer",912,9
25,"Somakandan, Aizvereah",881,7`, {
	complete: function(results) {
		console.log("Finished:", results.data);
		// parseTop50(results.data);
		parseTop50Qualified(results.data);
		// parseOcaMembers(results.data);
	}
});

