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
-- Name: states_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.states_data (
    estado text,
    predict_no_re text,
    predict_with_re text,
    cruderate text,
    adjrate text,
    quartile text
);


ALTER TABLE public.states_data OWNER TO postgres;

--
-- Data for Name: states_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.states_data (estado, predict_no_re, predict_with_re, cruderate, adjrate, quartile) FROM stdin;
Acre	10,59132901	8,196625144	0,17252	0,141626668	14,16 (between Q1 and Q2)
Amapa	4,268080024	8,904961889	0,17252	0,287895071	28,79 (> Q3)
Amazonas	20,20040101	27,27631312	0,17252	0,261883126	26,19 (> Q3)
Para	40,26480283	64,17236015	0,17252	0,264504606	26,45 (> Q3)
Rondonia	20,63155067	21,80215723	0,17252	0,17510478	17,51 (between Q2 and Q3)
Roraima	6,015719953	9,546883948	0,17252	0,290323267	29,03 (> Q3)
Tocantins	12,10527627	11,67442704	0,17252	0,178463265	17,85  (between Q2 and Q3)
Alagoas	6,055603504	5,786541167	0,17252	0,170576552	17,06 (between Q1 and Q2)
Bahia	41,36827439	33,55055621	0,17252	0,130143743	13,01 (< Q1)
Ceara	20,94346605	22,26168343	0,17252	0,229282064	22,93 (between Q2 and Q3)
Maranhao	10,89284136	13,3305342	0,17252	0,226802065	22,68 (between Q2 and Q3)
Paraiba	13,46772606	19,14822485	0,17252	0,277337888	27,73 (> Q3)
Pernambuco	29,77670089	46,76953866	0,17252	0,251860324	25,19 (> Q3)
Piaui	10,02885573	14,52990376	0,17252	0,239405641	23,94  (between Q2 and Q3)
Rio Grande do Norte	9,887304	13,82424519	0,17252	0,268009299	26,8 (> Q3)
Sergipe	6,45167272	5,011078301	0,17252	0,116064245	11,61 (< Q1)
Goias	50,00420332	43,14567572	0,17252	0,140794877	14,08 (between Q1 and Q2)
Mato Grosso	33,37538193	22,91210411	0,17252	0,116197178	11,62 (< Q1)
Mato Grosso do Sul	39,23811069	24,93552336	0,17252	0,110834466	11,08 (< Q1)
Distrito Federal	26,93907007	20,95260691	0,17252	0,128395871	12,84 (< Q1)
Espirito Santo	11,94920468	3,179871629	0,17252	0,046368913	4,64 (< Q1)
Minas Gerais	72,65188183	52,48259107	0,17252	0,13136711	12,68 (< Q1)
Rio de Janeiro	49,61180299	51,24226267	0,17252	0,167329396	16,73 (between Q1 and Q2)
Sao Paulo	97,64248878	114,3818184	0,17252	0,181566838	18,16  (between Q2 and Q3)
Parana	72,09746798	61,36769851	0,17252	0,133978734	13,4 (between Q1 and Q2)
Santa Catarina	54,75951792	41,92658567	0,17252	0,131443179	13,14 (between Q1 and Q2)
Rio Grande do Sul	68,83081734	52,01011351	0,17252	0,130848816	13,08 (< Q1)
\.


--
-- PostgreSQL database dump complete
--

