/**
 * @author liuisaac
 * Note: Requires Jquery
 * Link: http://spreadsheets.google.com/feeds/cells/0Au7rq5Ie3aF6dFBidzR3NVo3YXhxQTg1QXJRTUY4SVE/od6/public/basic?alt=json-in-script&callback=myFunc
 */

/* **
 * Table of distances
 *			Kenn	Grim	Alvar	Ameri	Kita	Hill	Shil	aes		park	logan	glen	walters		searles		aze		hirsch		D.O.	Bunker	CSB	            	
 * Kenn		0.0		2.11	7.63	3.93	8.26	9.78	5.12	8.21	3.12	7.41	1.98	0.9			7.29		0.85	1.61		--		3.06	3.56
 * Grimmer	2.11	0.0		--		--		--		--		--		--		--		--		--		--			--			--		1.11		--		--
 * Alvarado	9.09	--		0.0		4.29	2.81	6.0		--		0.31	--		3.82	--		9.15		4.16		--		--			--		--
 * American	--		--		--		0.0		--		--		3.49	--		2.1		--		--		2.96		--			--		4.14		--		--
 * Kitayama	--		--		2.81	7.29	0.0		2.82	--		2.77	--		2.21	--		9.00		2.55		8.08	--			10.81	--		7.53
 * Hillview	9.78	--		5.29	--		2.81	0.0		--		4.72	--		3.51	--		--			2.83		--		--			11.66	--
 * Shilling	4.6		--		--		3.49	7.35	9.01	0.0		6.54	4.96	6.69	--		--			--			--		6.66		--		--	
 * AES		8.32	--		1.38	--		--		--		6.42	--		--		--		--		--			--			--		--			--		--
 * Parkmont	3.15	--		--		--		5.85	--		4.96	--		--		4.26	--		2.17		--			--		--			--		--		1.62
 * Logan	7.41	10.06	3.78	--		--		--		--		--		--		0.0		--		--			0.34		--		8.45		--		--
 * Glenmoor	1.98	--		--		--		--		--		--		--		--		--		--		--			--			--		--			--		--
 * Walters	0.9		--		--		--		8.3		--		--		--		--		6.94	--		--			7.33		--		--			--		--
 * Searles	7.29	--		4.16	--		2.32	2.83	--		--		--		0.34	--		7.33		0.0			--		--			--		--											
 * Azeveda	0.85	--		--		--		7.39	10.45	--		7.02	--		6.03	--		--			--			--		--			--		1.73	4.38
 * Hirsch	2.21	1.16	--		--		9.81	--		6.66	9.44	--		--		--		2.3			--			--		0.0			--		--
 * D.O.		
 * Bunker	--		--		--		--		--		--		--		--		--		5.79	--		--			--			--		--			--		--
 * CSB
 */		
var distances = [
//Kenn	Grim	Alvar	Ameri	Kita	Hill	Shil	aes		park	logan	glen	walters		searles		aze		hirsch		D.O.	Bunker	CSB
//Kennedy:	            	
[0.0,	2.11,	7.63,	3.93,	8.26,	9.78,	5.12,	8.21,	3.12,	7.41,	1.98,	0.9,		7.29,		0.85,	1.61,		-1.0,	3.06,	3.56],
// Grimmer:
[2.11,	0.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,		-1.0,		-1.0,	1.11,		-1.0,	-1.0,	-1.0],
//Alvarado
[9.09,	-1.0,	0.0,	4.29,	2.81,	6.0,	-1.0,	0.31,	-1.0,	3.82,	-1.0,	9.15,		4.16,		-1.0,	-1.0,		-1.0,	-1.0,	-1.0],
//American
[-1.0,	-1.0,	-1.0,	0.0,	-1.0,	-1.0,	3.49,	-1.0,	2.1,	-1.0,	-1.0,	2.96,		-1.0,		-1.0,	4.14,		-1.0,	-1.0,	-1.0],
//Kitayama
[-1.0,	-1.0,	2.81,	7.29,	0.0,	2.82,	-1.0,	2.77,	-1.0,	2.21,	-1.0,	9.0,		2.55,		8.08,	-1.0,		10.81,	-1.0,	7.53],
//Hillsview	
[9.78,	-1.0,	5.29,	-1.0,	2.81,	0.0,	-1.0,	4.72,	-1.0,	3.51,	-1.0,	-1.0,		2.83,		-1.0,	-1.0,		11.66,	-1.0,	-1.0],
//Shilling
[4.6,	-1.0,	-1.0,	3.49,	7.35,	9.01,	0.0,	6.54,	4.96,	6.69,	-1.0,	-1.0,		-1.0,		-1.0,	6.66,		-1.0,	-1.0,	-1.0],
//AES
[8.32,	-1.0,	1.38,	-1.0,	-1.0,	-1.0,	6.42,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,		-1.0,		-1.0,	-1.0,		-1.0,	-1.0,	-1.0],
//Parkmont
[3.15,	-1.0,	-1.0,	-1.0,	5.85,	-1.0,	4.96,	-1.0,	-1.0,	4.26,	-1.0,	2.17,		-1.0,		-1.0,	-1.0,		-1.0,	-1.0,	1.62],
//Logan
[7.41,	10.06,	3.78,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	0.0,	-1.0,	-1.0,		0.34,		-1.0,	8.45,		-1.0,	-1.0,	-1.0],
//Glenmoor
[1.98,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,		-1.0,		-1.0,	-1.0,		-1.0,	-1.0,	-1.0],
//Walters
[0.9,	-1.0 	-1.0,	-1.0,	8.3,	-1.0,	-1.0,	-1.0,	-1.0,	6.94,	-1.0,	-1.0,		7.33,		-1.0,	-1.0,		-1.0,	-1.0,	-1.0],
//Searles	
[7.29,	-1.0,	4.16,	-1.0,	2.32,	2.83,	-1.0,	-1.0,	-1.0,	0.34,	-1.0,	7.33,		0.0,		-1.0,	-1.0,		-1.0,	-1.0,	-1.0],
//Azeveda													
[0.85,	-1.0,	-1.0,	-1.0,	7.39,	10.45,	-1.0,	7.02,	-1.0,	6.03,	-1.0,	-1.0,		-1.0,		-1.0,	-1.0,		-1.0,	1.73,	4.38],
//Hirsch
[2.21,	1.16,	-1.0,	-1.0,	9.81,	-1.0,	6.66,	9.44,	-1.0,	-1.0,	-1.0,	2.3,		-1.0,		-1.0,	0.0,		-1.0,	-1.0,	-1.0],
//D.O.
[-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,		-1.0,		-1.0,	-1.0,		0.0, 	-1.0,	-1.0],
//Bunker
[-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	5.79,	-1.0,	-1.0,		-1.0,		-1.0,	-1.0,		-1.0, 	0.0,	-1.0],
//CSB
[-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,	-1.0,		-1.0,		-1.0,	-1.0,		-1.0, 	-1.0,	0.0]
];
