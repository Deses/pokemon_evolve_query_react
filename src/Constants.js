export const Constants = {
	GENERATIONS	:	[
		{ name: 'Generation 1', range: ['1', '151'] },
		{ name: 'Generation 2', range: ['152', '251'] },
		{ name: 'Generation 3', range: ['252', '386'] },
		{ name: 'Generation 4', range: ['387', '493'] },
		{ name: 'Generation 5', range: ['494', '649'] },
		{ name: 'Generation 6', range: ['650', '721'] },
		{ name: 'Generation 7', range: ['722', '807'] }
	],
	
	QUERIES	:	{
		Compact: {
			label: "Compact Full Query",
			query: '1,4,7,10,13,16,19-23,27,29,32,37,41,43,46-60,63,66,69,72,74,77-92,95-116,118-147,152,155,158,161-179,183,187,191-246,252-318,322-331,339-374'
		},
		Full: {
			label: 'Full Query',
			query: ['1','4','7','10','13','16','19','21','23','27','29','32','37','41','43','46','48','50','52','54','56','58','60','63','66','69','72','74','77','79','81','84','86','88','90','92','96','98','100','102','104','109','111','113','116','118','120','133','138','140','147','152','155','158','161','163','165','167','170','172','173','174','175','177','179','183','187','194','204','209','216','218','220','223','228','231','236','238','239','240','246','252','255','258','261','263','265','270','273','276','278','280','283','285','287','290','293','296','298','300','304','307','309','316','318','322','325','328','331','339','341','343','345','347','349','353','355','360','361','363','366','371','374']
		},
		Minimal: {
			label: 'Minimal Query',
			query: ['10','13','16','19','21','161','163','165','167','177','187','261','263','293','300']
		},
		Water: {
			label: 'Water-Specific Query',
			query: ['10','13','16','19','21','60','72','86','90','116','161','163','165','167','177','183','194','223','261','263','293','300']
		},
		Forest: {
			label: 'Forest-Specfic Query',
			query: ['10','13','16','19','21','29','32','43','69','161','163','165','167','177','191','204','261','263','293','300']
		},
	},
	
	EVOLVE_TRANSLATIONS	:	{
		English		:	'evolve',
		Spanish		:	'evolucionar',
		German		:	'entwickeln',
		Italian		:	'fai evolvere',
		French		:	'évoluer',
		Dutch		:	'evolueren',
		Greek		:	'αναπτύσσω',
		Portuguese	:	'evoluir',
		Japanese	:	'進化する',
		Korean		:	'진화하다',
	}
}