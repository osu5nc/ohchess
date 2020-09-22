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

Papa.parse(`Ranking,Name,Rating,Grade,
1,"Shen, Christopher",2424,11,
2,"Wang, Jason",2422,9,
3,"Baker, Vincent",2328,12,
4,"Cao, Elton Yutong",2306,11,
5,"Liu, Aristo",2254,12,
6,"Storn, Justin",2229,12,
7,"Keuchel, Destynn",2176,11,
8,"Tan, Ralph",2157,11,
9,"Balyan, Aryan",2123,11,
10,"Sampath, Aja",2122,10,
11,"Padhye, Rohan",2100,7,
12,"Tan, Sean",2050,8,
13,"Adury, Anant",2021,8,
14,"He, Levon",2020,8,
15,"Orellana, Juan",2002,10,
16,"Zhou, James",1980,12,
17,"Cheng, Emma",1925,9,
18,"George, Adith",1918,11,
19,"Prasad, Arvind Sai",1916,12,
20,"Huang, Evan",1910,11,
21,"Song, Hansen",1905,11,
22,"Sathyajeeth, Varun",1900,9,
23,"Kim, Dae San",1875,8,
24,"Wojnar, Nicholas",1864,10,
25,"Lin, Michael",1858,9,
26,"Mohanselvan, Adeti",1856,10,
27,"Wang, Matt",1856,8,
28,"Wang, Kevin",1851,9,
29,"Chen, Vincent",1838,12,
30,"Bauml, Brody",1831,6,
31,"Prabu, Sneha",1796,11,
32,"Murthy, Shamith",1795,7,
33,"Liu, Edison",1794,7,
34,"Dinesh, Abinav Sundar",1784,6,
35,"Chen, Ethan",1778,7,
36,"Kallam, Karthik",1773,10,
37,"Yang, Cody",1768,11,
38,"Seper, Colin",1762,12,
39,"Ferkins, Ethan",1749,11,
40,"Subramanian, Vijay",1748,12,
41,"Subramanian, Ajay",1746,12,
42,"Pisini, Dakshin",1737,11,
43,"Soni, Arjun",1723,4,
44,"Tripathi, Amogh",1714,7,
45,"Adury, Abhay Kumar",1682,12,
46,"Xi, Jason",1646,8,
47,"Cao, Kenneth",1615,10,
48,"Rowell, Bayethe",1603,12,
49,"Tan, Patricia",1597,6,
50,"Mutalam, Druvin",1596,7,
`, {
	complete: function(results) {
		console.log("Finished:", results.data);
		// parseTop50(results.data);
		parseTop50Qualified(results.data);
		// parseOcaMembers(results.data);
	}
});

