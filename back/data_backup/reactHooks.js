const reactHooks = [
  {
    id: "useState",
    name: "useState",
    description: "Барои нигоҳдорӣ ва тағйир додани state-и компонент истифода мешавад.",
    explanation: "useState яке аз Hook-ҳои асосии React мебошад. Он ба component имкон медиҳад, ки маълумоти тағйирёбандаро нигоҳ дорад ва ҳангоми тағйир ёфтани он component аз нав render шавад.",
    syntax: "const [state, setState] = useState(initialValue);",
    example: "const [count, setCount] = useState(0);\n\n<button onClick={() => setCount(count + 1)}>\n  {count}\n</button>",
    video: "https://www.youtube.com/embed/4Ot7nZzo2Wc"
  },
  {
    id: "useEffect",
    name: "useEffect",
    description: "Барои иҷро кардани side effect-ҳо дар component истифода мешавад.",
    explanation: "useEffect барои корҳое истифода мешавад, ки берун аз rendering-и оддии component иҷро мешаванд, масалан гирифтани маълумот аз API, тағйир додани document title ё кор бо event listener.",
    syntax: "useEffect(() => {\n  // effect\n}, [dependencies]);",
    example: "useEffect(() => {\n  document.title = `Count: ${count}`;\n}, [count]);",
    video: "https://www.youtube.com/embed/4Ot7nZzo2Wc"
  },
  {
    id: "useContext",
    name: "useContext",
    description: "Барои гирифтани маълумот аз React Context истифода мешавад.",
    explanation: "useContext имкон медиҳад, ки component маълумотро аз Context мустақиман гирад, бе он ки props-ро аз якчанд component пай дар пай гузаронем.",
    syntax: "const value = useContext(MyContext);",
    example: "const ThemeContext = createContext('light');\n\nconst theme = useContext(ThemeContext);",
    video: "https://www.youtube.com/embed/4Ot7nZzo2Wc"
  },
  {
    id: "useRef",
    name: "useRef",
    description: "Барои нигоҳ доштани reference ё арзише, ки render-и навро ба вуҷуд намеорад, истифода мешавад.",
    explanation: "useRef метавонад ба DOM element ишора кунад ё арзиши mutable-ро байни render-ҳо нигоҳ дорад.",
    syntax: "const ref = useRef(initialValue);",
    example: "const inputRef = useRef(null);\n\n<input ref={inputRef} />\n\n<button onClick={() => inputRef.current.focus()}>\n  Focus\n</button>",
    video: "https://www.youtube.com/embed/V4OYCYvKXGM"
  },
  {
    id: "useMemo",
    name: "useMemo",
    description: "Барои memoization-и натиҷаи ҳисоб истифода мешавад.",
    explanation: "useMemo натиҷаи як ҳисобро нигоҳ медорад ва онро танҳо вақте аз нав ҳисоб мекунад, ки dependency-ҳои муайяншуда тағйир ёбанд.",
    syntax: "const value = useMemo(() => calculation, [dependencies]);",
    example: "const total = useMemo(() => {\n  return products.reduce((sum, product) => sum + product.price, 0);\n}, [products]);",
    video: "https://www.youtube.com/embed/V4OYCYvKXGM"
  },
  {
    id: "useCallback",
    name: "useCallback",
    description: "Барои нигоҳ доштани reference-и function истифода мешавад.",
    explanation: "useCallback function-ро memoize мекунад, то ҳангоми render-ҳои нав ҳамон function reference нигоҳ дошта шавад, агар dependency-ҳои он тағйир наёфта бошанд.",
    syntax: "const functionName = useCallback(() => {\n  // code\n}, [dependencies]);",
    example: "const handleClick = useCallback(() => {\n  console.log('Clicked');\n}, []);",
    video: "https://www.youtube.com/embed/V4OYCYvKXGM"
  },
  {
    id: "useReducer",
    name: "useReducer",
    description: "Барои идора кардани state-и мураккаб истифода мешавад.",
    explanation: "useReducer вақте муфид аст, ки state якчанд ҳолат ё action дошта бошад. Он state ва dispatch function медиҳад.",
    syntax: "const [state, dispatch] = useReducer(reducer, initialState);",
    example: "const reducer = (state, action) => {\n  if (action.type === 'increment') {\n    return { count: state.count + 1 };\n  }\n  return state;\n};\n\nconst [state, dispatch] = useReducer(reducer, { count: 0 });"
  },
  {
    id: "useLayoutEffect",
    name: "useLayoutEffect",
    description: "Барои иҷро кардани effect пеш аз рангкунии browser истифода мешавад.",
    explanation: "useLayoutEffect ба useEffect монанд аст, аммо effect-и он пеш аз он ки browser тағйироти DOM-ро ба экран нишон диҳад, иҷро мешавад.",
    syntax: "useLayoutEffect(() => {\n  // code\n}, [dependencies]);",
    example: "useLayoutEffect(() => {\n  const height = elementRef.current?.offsetHeight;\n  console.log(height);\n}, []);",
    video: "https://www.youtube.com/embed/V4OYCYvKXGM"
  },
  {
    id: "useId",
    name: "useId",
    description: "Барои сохтани ID-и уникалӣ дар React истифода мешавад.",
    explanation: "useId барои сохтани ID-ҳои устувор ва уникалӣ, махсусан барои пайваст кардани label ва input ё дигар accessibility attributes истифода мешавад.",
    syntax: "const id = useId();",
    example: "const id = useId();\n\n<label htmlFor={id}>Ном</label>\n<input id={id} />"
  },
  {
    id: "useImperativeHandle",
    name: "useImperativeHandle",
    description: "Имкон медиҳад, ки component муайян кунад чӣ API тавассути ref дастрас бошад.",
    explanation: "useImperativeHandle асосан ҳангоми кор бо ref истифода мешавад ва ба component имкон медиҳад, ки танҳо метод ё арзишҳои лозимиро ба component-и беруна пешниҳод кунад.",
    syntax: "useImperativeHandle(ref, () => ({\n  method() {}\n}));",
    example: "useImperativeHandle(ref, () => ({\n  focus() {\n    inputRef.current.focus();\n  }\n}));"
  },
  {
    id: "useDebugValue",
    name: "useDebugValue",
    description: "Барои нишон додани маълумоти иловагӣ дар React DevTools истифода мешавад.",
    explanation: "useDebugValue асосан барои custom Hook-ҳо истифода мешавад, то developer дар React DevTools ҳолати Hook-ро осонтар бинад.",
    syntax: "useDebugValue(value);",
    example: "function useOnlineStatus(isOnline) {\n  useDebugValue(isOnline ? 'Online' : 'Offline');\n  return isOnline;\n}"
  },
  {
    id: "useDeferredValue",
    name: "useDeferredValue",
    description: "Барои ба таъхир гузоштани навсозии як қисми UI истифода мешавад.",
    explanation: "useDeferredValue ба React имкон медиҳад, ки арзиши навро фавран барои ҳамаи қисмҳои UI истифода набарад ва навсозии қисми камаҳамиятро баъдтар иҷро кунад.",
    syntax: "const deferredValue = useDeferredValue(value);",
    example: "const deferredQuery = useDeferredValue(query);\n\n<SearchResults query={deferredQuery} />"
  },
  {
    id: "useTransition",
    name: "useTransition",
    description: "Барои ҳамчун non-blocking нишон додани баъзе навсозии UI истифода мешавад.",
    explanation: "useTransition имкон медиҳад, ки баъзе state update-ҳо ҳамчун transition қайд карда шаванд, то interaction-и муҳимтар барои корбар responsive монад.",
    syntax: "const [isPending, startTransition] = useTransition();",
    example: "const [isPending, startTransition] = useTransition();\n\nstartTransition(() => {\n  setTab(nextTab);\n});"
  },
  {
    id: "useSyncExternalStore",
    name: "useSyncExternalStore",
    description: "Барои пайваст шудан ба external store истифода мешавад.",
    explanation: "useSyncExternalStore барои React component-ҳое мебошад, ки бояд ба state-и беруна аз React, масалан store-и махсус ё системаи subscription, пайваст шаванд.",
    syntax: "const snapshot = useSyncExternalStore(\n  subscribe,\n  getSnapshot\n);",
    example: "const value = useSyncExternalStore(\n  subscribe,\n  getSnapshot\n);"
  },
  {
    id: "useInsertionEffect",
    name: "useInsertionEffect",
    description: "Барои ворид кардани CSS пеш аз дигар effect-ҳо истифода мешавад.",
    explanation: "useInsertionEffect асосан барои library-ҳое пешбинӣ шудааст, ки CSS-ро динамикӣ ба DOM ворид мекунанд. Дар application-ҳои оддии React одатан истифодаи он зарур нест.",
    syntax: "useInsertionEffect(() => {\n  // code\n}, [dependencies]);",
    example: "useInsertionEffect(() => {\n  const style = document.createElement('style');\n  document.head.appendChild(style);\n}, []);"
  }
];

export default reactHooks;