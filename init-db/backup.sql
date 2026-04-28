--
-- PostgreSQL database dump
--

\restrict dFmDB0lJ2xiRneuKZSdPiZjNUfZXEQ4QfUpkIaZmVSBtU7nbeoxOuza0v5sBRft

-- Dumped from database version 15.15
-- Dumped by pg_dump version 15.15

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
-- Name: bike_types; Type: TABLE; Schema: public; Owner: bike_user
--

CREATE TABLE public.bike_types (
    id integer NOT NULL,
    type_name character varying(255) NOT NULL,
    hourly_rate numeric(8,2) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.bike_types OWNER TO bike_user;

--
-- Name: bike_types_id_seq; Type: SEQUENCE; Schema: public; Owner: bike_user
--

CREATE SEQUENCE public.bike_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bike_types_id_seq OWNER TO bike_user;

--
-- Name: bike_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bike_user
--

ALTER SEQUENCE public.bike_types_id_seq OWNED BY public.bike_types.id;


--
-- Name: bikes; Type: TABLE; Schema: public; Owner: bike_user
--

CREATE TABLE public.bikes (
    id integer NOT NULL,
    model character varying(255) NOT NULL,
    status character varying(255) DEFAULT 'доступен'::character varying,
    deposit numeric(8,2) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    bike_type_id integer,
    station_id integer
);


ALTER TABLE public.bikes OWNER TO bike_user;

--
-- Name: bikes_id_seq; Type: SEQUENCE; Schema: public; Owner: bike_user
--

CREATE SEQUENCE public.bikes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bikes_id_seq OWNER TO bike_user;

--
-- Name: bikes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bike_user
--

ALTER SEQUENCE public.bikes_id_seq OWNED BY public.bikes.id;


--
-- Name: clients; Type: TABLE; Schema: public; Owner: bike_user
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    full_name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone character varying(255),
    registration_date timestamp with time zone NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.clients OWNER TO bike_user;

--
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: bike_user
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clients_id_seq OWNER TO bike_user;

--
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bike_user
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- Name: rentals; Type: TABLE; Schema: public; Owner: bike_user
--

CREATE TABLE public.rentals (
    id integer NOT NULL,
    start_time timestamp with time zone NOT NULL,
    end_time timestamp with time zone,
    total_cost numeric(8,2),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    client_id integer,
    bike_id integer
);


ALTER TABLE public.rentals OWNER TO bike_user;

--
-- Name: rentals_id_seq; Type: SEQUENCE; Schema: public; Owner: bike_user
--

CREATE SEQUENCE public.rentals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rentals_id_seq OWNER TO bike_user;

--
-- Name: rentals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bike_user
--

ALTER SEQUENCE public.rentals_id_seq OWNED BY public.rentals.id;


--
-- Name: stations; Type: TABLE; Schema: public; Owner: bike_user
--

CREATE TABLE public.stations (
    id integer NOT NULL,
    location character varying(255) NOT NULL,
    working_hours character varying(255),
    manager_name character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.stations OWNER TO bike_user;

--
-- Name: stations_id_seq; Type: SEQUENCE; Schema: public; Owner: bike_user
--

CREATE SEQUENCE public.stations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stations_id_seq OWNER TO bike_user;

--
-- Name: stations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bike_user
--

ALTER SEQUENCE public.stations_id_seq OWNED BY public.stations.id;


--
-- Name: bike_types id; Type: DEFAULT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.bike_types ALTER COLUMN id SET DEFAULT nextval('public.bike_types_id_seq'::regclass);


--
-- Name: bikes id; Type: DEFAULT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.bikes ALTER COLUMN id SET DEFAULT nextval('public.bikes_id_seq'::regclass);


--
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- Name: rentals id; Type: DEFAULT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.rentals ALTER COLUMN id SET DEFAULT nextval('public.rentals_id_seq'::regclass);


--
-- Name: stations id; Type: DEFAULT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.stations ALTER COLUMN id SET DEFAULT nextval('public.stations_id_seq'::regclass);


--
-- Data for Name: bike_types; Type: TABLE DATA; Schema: public; Owner: bike_user
--

COPY public.bike_types (id, type_name, hourly_rate, created_at, updated_at) FROM stdin;
1	Горный	300.00	2026-04-18 10:39:56.531288+00	2026-04-18 10:39:56.531288+00
2	Городской	250.00	2026-04-18 10:39:56.531288+00	2026-04-18 10:39:56.531288+00
3	Шоссейный	350.00	2026-04-18 10:39:56.531288+00	2026-04-18 10:39:56.531288+00
4	Электровелосипед	500.00	2026-04-18 10:39:56.531288+00	2026-04-18 10:39:56.531288+00
5	Детский	200.00	2026-04-18 10:39:56.531288+00	2026-04-18 10:39:56.531288+00
\.


--
-- Data for Name: bikes; Type: TABLE DATA; Schema: public; Owner: bike_user
--

COPY public.bikes (id, model, status, deposit, created_at, updated_at, bike_type_id, station_id) FROM stdin;
16	Trek Marlin 5	available	3000.00	2026-04-18 10:51:27.954857+00	2026-04-18 10:51:27.954857+00	1	1
17	Forward Enigma 2.0	available	2500.00	2026-04-18 10:51:27.954857+00	2026-04-18 10:51:27.954857+00	2	2
18	Giant Defy 3	available	4000.00	2026-04-18 10:51:27.954857+00	2026-04-18 10:51:27.954857+00	3	3
19	Eltreco XT 850	available	5000.00	2026-04-18 10:51:27.954857+00	2026-04-18 10:51:27.954857+00	4	4
20	Stels Pilot 710	available	1500.00	2026-04-18 10:51:27.954857+00	2026-04-18 10:51:27.954857+00	5	5
\.


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: bike_user
--

COPY public.clients (id, full_name, email, phone, registration_date, created_at, updated_at) FROM stdin;
1	Иванов Иван Иванович	ivanov@mail.ru	+79001112233	2026-04-18 10:43:12.727429+00	2026-04-18 10:43:12.727429+00	2026-04-18 10:43:12.727429+00
2	Петрова Анна Сергеевна	petrova@gmail.com	+79002223344	2026-04-18 10:43:12.727429+00	2026-04-18 10:43:12.727429+00	2026-04-18 10:43:12.727429+00
3	Сидоров Алексей Дмитриевич	sidorov@yandex.ru	+79003334455	2026-04-18 10:43:12.727429+00	2026-04-18 10:43:12.727429+00	2026-04-18 10:43:12.727429+00
6	Петросенко Иван Федорович	gumbuble42@gmail.com	+78456245745	2026-04-25 21:04:33.867+00	2026-04-25 21:04:49.837+00	2026-04-25 21:04:49.837+00
\.


--
-- Data for Name: rentals; Type: TABLE DATA; Schema: public; Owner: bike_user
--

COPY public.rentals (id, start_time, end_time, total_cost, created_at, updated_at, client_id, bike_id) FROM stdin;
26	2026-04-16 10:58:11.599165+00	2026-04-17 10:58:11.599165+00	850.00	2026-04-18 10:58:11.599165+00	2026-04-18 10:58:11.599165+00	1	16
27	2026-04-17 10:58:11.599165+00	2026-04-18 04:58:11.599165+00	420.00	2026-04-18 10:58:11.599165+00	2026-04-18 10:58:11.599165+00	2	17
34	2026-04-26 12:59:20.441+00	2026-04-26 13:04:18.255+00	100.00	2026-04-26 12:59:31.896+00	2026-04-26 13:04:18.277+00	3	18
28	2026-04-18 06:58:11.599165+00	2026-04-26 13:04:30.127+00	100.00	2026-04-18 10:58:11.599165+00	2026-04-26 13:04:30.146+00	3	18
35	2026-04-26 12:59:20.441+00	2026-04-26 13:05:28.025+00	100.00	2026-04-26 12:59:41.628+00	2026-04-26 13:05:28.044+00	6	18
40	2026-04-26 13:12:21.794+00	2026-04-26 13:12:29.074+00	150.00	2026-04-26 13:12:21.8+00	2026-04-26 13:12:29.094+00	1	18
41	2026-04-26 13:13:41.804+00	2026-04-26 13:13:45.002+00	150.00	2026-04-26 13:13:41.811+00	2026-04-26 13:13:45.02+00	1	16
43	2026-04-26 13:18:33.175+00	2026-04-26 13:18:35.569+00	300.00	2026-04-26 13:18:33.181+00	2026-04-26 13:18:35.573+00	1	16
44	2026-04-26 13:18:44.995+00	2026-04-26 13:18:47.681+00	300.00	2026-04-26 13:18:45.006+00	2026-04-26 13:18:47.685+00	1	16
45	2026-04-26 13:20:15.313+00	2026-04-26 13:20:17.683+00	300.00	2026-04-26 13:20:15.321+00	2026-04-26 13:20:17.688+00	1	16
46	2026-04-26 13:39:38.122+00	2026-04-26 13:39:40.448+00	350.00	2026-04-26 13:39:38.133+00	2026-04-26 13:39:40.452+00	3	18
47	2026-04-26 13:42:17.55+00	\N	0.00	2026-04-26 13:42:17.559+00	2026-04-26 13:42:17.559+00	6	19
\.


--
-- Data for Name: stations; Type: TABLE DATA; Schema: public; Owner: bike_user
--

COPY public.stations (id, location, working_hours, manager_name, created_at, updated_at) FROM stdin;
1	ул. Ленина, 10 (Центральный парк)	08:00-22:00	Иванов Иван Иванович	2026-04-18 10:46:50.272259+00	2026-04-18 10:46:50.272259+00
2	Вокзальная площадь, 1	07:00-23:00	Петров Петр Петрович	2026-04-18 10:46:50.272259+00	2026-04-18 10:46:50.272259+00
3	Набережная р. Фонтанки, 50	09:00-21:00	Сидоров Сергей Сергеевич	2026-04-18 10:46:50.272259+00	2026-04-18 10:46:50.272259+00
4	пр. Университетский, 3 (Университет)	08:30-20:00	Козлова Анна Андреевна	2026-04-18 10:46:50.272259+00	2026-04-18 10:46:50.272259+00
5	ТЦ "Мега", парковка	10:00-22:00	Новиков Дмитрий Дмитриевич	2026-04-18 10:46:50.272259+00	2026-04-18 10:46:50.272259+00
\.


--
-- Name: bike_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bike_user
--

SELECT pg_catalog.setval('public.bike_types_id_seq', 7, true);


--
-- Name: bikes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bike_user
--

SELECT pg_catalog.setval('public.bikes_id_seq', 20, true);


--
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bike_user
--

SELECT pg_catalog.setval('public.clients_id_seq', 6, true);


--
-- Name: rentals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bike_user
--

SELECT pg_catalog.setval('public.rentals_id_seq', 47, true);


--
-- Name: stations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bike_user
--

SELECT pg_catalog.setval('public.stations_id_seq', 5, true);


--
-- Name: bike_types bike_types_pkey; Type: CONSTRAINT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.bike_types
    ADD CONSTRAINT bike_types_pkey PRIMARY KEY (id);


--
-- Name: bike_types bike_types_type_name_key; Type: CONSTRAINT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.bike_types
    ADD CONSTRAINT bike_types_type_name_key UNIQUE (type_name);


--
-- Name: bikes bikes_pkey; Type: CONSTRAINT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.bikes
    ADD CONSTRAINT bikes_pkey PRIMARY KEY (id);


--
-- Name: clients clients_email_key; Type: CONSTRAINT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_email_key UNIQUE (email);


--
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- Name: rentals rentals_pkey; Type: CONSTRAINT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.rentals
    ADD CONSTRAINT rentals_pkey PRIMARY KEY (id);


--
-- Name: stations stations_location_key; Type: CONSTRAINT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.stations
    ADD CONSTRAINT stations_location_key UNIQUE (location);


--
-- Name: stations stations_pkey; Type: CONSTRAINT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.stations
    ADD CONSTRAINT stations_pkey PRIMARY KEY (id);


--
-- Name: bikes bikes_bike_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.bikes
    ADD CONSTRAINT bikes_bike_type_id_fkey FOREIGN KEY (bike_type_id) REFERENCES public.bike_types(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: bikes bikes_station_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.bikes
    ADD CONSTRAINT bikes_station_id_fkey FOREIGN KEY (station_id) REFERENCES public.stations(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: rentals rentals_bike_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.rentals
    ADD CONSTRAINT rentals_bike_id_fkey FOREIGN KEY (bike_id) REFERENCES public.bikes(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: rentals rentals_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bike_user
--

ALTER TABLE ONLY public.rentals
    ADD CONSTRAINT rentals_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.clients(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

\unrestrict dFmDB0lJ2xiRneuKZSdPiZjNUfZXEQ4QfUpkIaZmVSBtU7nbeoxOuza0v5sBRft

