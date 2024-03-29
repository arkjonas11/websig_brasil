--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: states_data_emo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.states_data_emo (
    ogc_fid integer NOT NULL,
    estado character varying,
    totals_uwt character varying,
    crude_rates_uwt character varying,
    totals_weighted character varying,
    crude_rates_weighted character varying,
    predict_no_re character varying,
    predict_with_re character varying,
    adjrate character varying,
    quartile text
);


ALTER TABLE public.states_data_emo OWNER TO postgres;

--
-- Name: states_data_emo_ogc_fid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.states_data_emo_ogc_fid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.states_data_emo_ogc_fid_seq OWNER TO postgres;

--
-- Name: states_data_emo_ogc_fid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.states_data_emo_ogc_fid_seq OWNED BY public.states_data_emo.ogc_fid;


--
-- Name: states_data_emo ogc_fid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states_data_emo ALTER COLUMN ogc_fid SET DEFAULT nextval('public.states_data_emo_ogc_fid_seq'::regclass);


--
-- Data for Name: states_data_emo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.states_data_emo (ogc_fid, estado, totals_uwt, crude_rates_uwt, totals_weighted, crude_rates_weighted, predict_no_re, predict_with_re, adjrate, quartile) FROM stdin;
5	Bahia	242	0,198347107438017	128396,169158936	0,20289580593112	32,2103757963702	48,3865928086285	0,224204120508946	22,42 (> Q3)
6	Ceara	119	0,0588235294117647	58741,2561950684	0,0588235294117647	10,5544085511028	6,69039341838899	0,0946089222204902	9,46 (< Q1)
10	Maranhao	64	0,0625	33593,2407531738	0,0468616615012223	6,81207748369274	2,93723897907122	0,0643537773426408	6,44 (< Q1)
15	Paraiba	79	0,10126582278481	41753,6492004395	0,105229757483049	8,52279478459896	8,04891982850408	0,140951567504011	14,1 (between Q1 and Q2)
17	Pernambuco	173	0,167630057803468	90733,7646789551	0,179827220368662	22,8928278808966	30,8801602127611	0,201323485928995	20,13 (> Q3)
18	Piaui	60	0,116666666666667	28905,8651123047	0,108768720218644	6,45309760321143	6,18611659752474	0,143075149168841	14,31 (between Q1 and Q2)
20	Rio Grande do Norte	59	0,169491525423729	28590,1348571777	0,175766463318617	6,43891847714184	9,70359115695492	0,224923018565439	22,49 (> Q3)
26	Sergipe	37	0,108108108108108	20398,8130187988	0,122957019302167	4,13356102593599	4,25460930544388	0,153620675938542	15,36 (between Q1 and Q2)
25	Sao Paulo	584	0,202054794520548	351506,476425171	0,203333923303072	77,8827352887229	115,792919894038	0,221898900059401	22,19 (> Q3)
16	Parana	413	0,121065375302663	110322,899932861	0,1232699455149	55,6835398170104	50,1085980529404	0,134307342600312	13,43(< Q1)
24	Santa Catarina	318	0,160377358490566	82891,9385681152	0,162150846614746	40,3409249163999	50,6530936364094	0,18740210446094	18,74  (between Q2 and Q3)
21	Rio Grande do Sul	401	0,15211970074813	106283,241943359	0,153742660106026	51,3845962868659	60,8475544458082	0,176735795496717	17,67  (between Q2 and Q3)
1	Acre	61	0,0163934426229508	12193,7564697266	0,0211266646139678	7,59130009254446	1,25581960378102	0,0246902472013189	2,47 (< Q1)
3	Amapa	26	0,115384615384615	4790,92370605469	0,1000750192746	4,43476544910243	2,20456568097841	0,0741936482689566	7,42 (< Q1)
4	Amazonas	124	0,145161290322581	23435,7976074219	0,147786203262452	12,1491740678572	17,5570609186547	0,21568473111616	21,57 (> Q3)
14	Para	245	0,102040816326531	47125,6145019531	0,10864764761828	27,8090786119027	26,1165093343887	0,140166061326791	14,02 (between Q1 and Q2)
22	Rondonia	119	0,142857142857143	24641,5322265625	0,147959824640255	15,90313741396	17,0542432548239	0,160053059942004	16,01 (between Q1 and Q2)
23	Roraima	38	0,236842105263158	6562,03662109375	0,241548417369649	3,86869807662096	8,87263100717883	0,342296077800434	34,23 (> Q3)
27	Tocantins	72	0,0694444444444444	14147,3386230469	0,0703085304855003	7,84738014141661	4,84004300571623	0,092053195536	9,21 (< Q1)
2	Alagoas	35	0,171428571428571	18522,096282959	0,169507690079132	3,60523154944175	5,93965011053265	0,245890663842178	24,59 (> Q3)
9	Goias	299	0,117056856187291	49422,5491714478	0,138013604325751	35,7326397092011	38,8613007776252	0,162317958825948	16,23 (between Q1 and Q2)
11	Mato Grosso	207	0,111111111111111	31656,3373031616	0,142959353867523	23,3329157766783	27,9453895238514	0,178753886841852	17,88 (between Q2 and Q3)
12	Mato Grosso do Sul	240	0,0791666666666667	36330,4045944214	0,0665053525703965	25,7432555694634	14,9905650656735	0,0869098249836627	8,69 (< Q1)
7	Distrito Federal	163	0,128834355828221	25928,3469390869	0,13710417075863	18,3082762663593	21,3260952452469	0,173851413920467	17,39 (between Q2 and Q3)
8	Espirito Santo	72	0,152777777777778	41159,9639282227	0,153280791775077	9,31743754295349	11,1711954636888	0,178944148030967	17,89 (between Q2 and Q3)
13	Minas Gerais	429	0,118881118881119	274091,280708313	0,124060148937402	46,7744329438314	50,7559195434046	0,161954309546625	16,2 (between Q1 and Q2)
19	Rio de Janeiro	300	0,14	182170,546661377	0,14332286240348	34,4707004402292	42,0172611201113	0,181924827232635	18,19  (between Q2 and Q3)
\.


--
-- Name: states_data_emo_ogc_fid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.states_data_emo_ogc_fid_seq', 27, true);


--
-- Name: states_data_emo states_data_emo_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states_data_emo
    ADD CONSTRAINT states_data_emo_pk PRIMARY KEY (ogc_fid);


--
-- PostgreSQL database dump complete
--

