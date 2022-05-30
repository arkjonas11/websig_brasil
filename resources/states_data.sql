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
    adjrate text
);


ALTER TABLE public.states_data OWNER TO postgres;

--
-- Data for Name: states_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.states_data (estado, predict_no_re, predict_with_re, cruderate, adjrate) FROM stdin;
Acre	10,59132901	8,196625144	0,17252	0,133513157
Alagoas	6,055603504	5,786541167	0,17252	0,164854598
Amapá	4,268080024	8,904961889	0,17252	0,359947334
Amazonas	20,20040101	27,27631312	0,17252	0,232951293
Bahia	41,36827439	33,55055621	0,17252	0,139917414
Ceará	20,94346605	22,26168343	0,17252	0,183378702
Distrito Federal	26,93907007	20,95260691	0,17252	0,134182202
Espírito Santo	11,94920468	3,179871629	0,17252	0,04591029
Goiás	50,00420332	43,14567572	0,17252	0,148857326
Maranhão	10,89284136	13,3305342	0,17252	0,211127995
Mato Grosso	33,37538193	22,91210411	0,17252	0,118434486
Mato Grosso do Sul	39,23811069	24,93552336	0,17252	0,109635159
Minas Gerais	72,65188183	52,48259107	0,17252	0,124625769
Pará	40,26480283	64,17236015	0,17252	0,274955167
Paraíba	13,46772606	19,14822485	0,17252	0,245286527
Paraná	72,09746798	61,36769851	0,17252	0,146845037
Pernambuco	29,77670089	46,76953866	0,17252	0,270972961
Piauí	10,02885573	14,52990376	0,17252	0,249948655
Rio de Janeiro	49,61180299	51,24226267	0,17252	0,178189758
Rio Grande do Norte	9,887304	13,82424519	0,17252	0,241214266
Rio Grande do Sul	68,83081734	52,01011351	0,17252	0,130359992
Rondônia	20,63155067	21,80215723	0,17252	0,182308554
Roraima	6,015719953	9,546883948	0,17252	0,273787416
Santa Catarina	54,75951792	41,92658567	0,17252	0,132089814
São Paulo	97,64248878	114,3818184	0,17252	0,202095948
Sergipe	6,45167272	5,011078301	0,17252	0,133997998
Tocantins	12,10527627	11,67442704	0,17252	0,166379693
\.


--
-- PostgreSQL database dump complete
--

