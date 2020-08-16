#### 1.3.0 (2020-08-16)

##### Build System / Dependencies

* **deps:**  bump lodash from 4.17.15 to 4.17.19 ([e7d947bb](https://github.com/niallpaterson/sigma-calc/commit/e7d947bb17130022c469dc98de4864bed31d3540))

##### Chores

*  comment unfinished input validator import ([fab95ab7](https://github.com/niallpaterson/sigma-calc/commit/fab95ab7f9fb795753f6cad778ae675e4605edfd))
*  update import ([44b3bba3](https://github.com/niallpaterson/sigma-calc/commit/44b3bba320da6dbdaa2bb89addc5d1e0daaebd72))
*  add directory barrells ([0fd86afd](https://github.com/niallpaterson/sigma-calc/commit/0fd86afdcb2ed1c005acccaf4ba76564bccc41ce))
*  update gitignore ([beaec278](https://github.com/niallpaterson/sigma-calc/commit/beaec2781451db34dc0fda7a5968df1143d2a99e))
*  add commitlint ([5614b073](https://github.com/niallpaterson/sigma-calc/commit/5614b0739cca1516fe5078fd33b617853a7ded17))

##### Documentation Changes

*  add title emoji ([0eecad1e](https://github.com/niallpaterson/sigma-calc/commit/0eecad1ebc0ebef9610431f129af8a329cc297aa))
*  Add changelog ([573aeaaa](https://github.com/niallpaterson/sigma-calc/commit/573aeaaa50c2309153120d4c155d9cd844f6b1bb))
* **changelog:**  update changelog ([5f899fc5](https://github.com/niallpaterson/sigma-calc/commit/5f899fc506b268859968c0e4fb606592ff700ee5))

##### New Features

*  add input validator ([2adba5c8](https://github.com/niallpaterson/sigma-calc/commit/2adba5c811c8ff97cc728e10fcd918fe300ac489))

##### Bug Fixes

*  incorrect imports throwing errors ([a51b7837](https://github.com/niallpaterson/sigma-calc/commit/a51b7837c619b879936533d77996e5b82631bec9))
* **calculate:**  imports did not update ([a77968bc](https://github.com/niallpaterson/sigma-calc/commit/a77968bc69907eb302cbb10c34beb3324b5aa4e6))

##### Refactors

*  remove unnecessary compose barrel ([bfe3a4dd](https://github.com/niallpaterson/sigma-calc/commit/bfe3a4dd107fe06bcebc30fc46ddc34e3306387c))
*  add error for consistent return ([a6945dc7](https://github.com/niallpaterson/sigma-calc/commit/a6945dc7bef179cb2790d15577a2e86307483206))
*  remove unnecessary braces ([dc0015f1](https://github.com/niallpaterson/sigma-calc/commit/dc0015f1417c85364593185574e08756737af5f0))
*  rename 'operators' to 'operations' ([6a7fb9ba](https://github.com/niallpaterson/sigma-calc/commit/6a7fb9bab0ff07c97d388b0b1c4c030ff8658b1c))
*  move compose to own subdirectory ([2d3219f6](https://github.com/niallpaterson/sigma-calc/commit/2d3219f6b1f8297af997e970cfbdf2ec8d5068bd))
*  output validator ([18f3741c](https://github.com/niallpaterson/sigma-calc/commit/18f3741cfa1052bb2f7f0f33bf69ee6f9fc40752))
*  create zero normaliser utility ([045e9a0e](https://github.com/niallpaterson/sigma-calc/commit/045e9a0e599c3ca318e3fc38cfc5a1b55a13242f))
*  rename 'dom_utilities' to 'dom' ([a31334e6](https://github.com/niallpaterson/sigma-calc/commit/a31334e6ebb9ef29906613df82505a494112b33f))
*  move parsers to own directory ([17e91cdc](https://github.com/niallpaterson/sigma-calc/commit/17e91cdc54fd787d5e989d628f80db15424eaa08))
*  move checks to own utility directory ([c95401ec](https://github.com/niallpaterson/sigma-calc/commit/c95401ec5c11052375d28beaedc399895806e754))
*  solve equation ([a1574788](https://github.com/niallpaterson/sigma-calc/commit/a1574788f65118281de19913435ebc0545a6fb95))
*  add calculate utility for solveIteration ([065f8481](https://github.com/niallpaterson/sigma-calc/commit/065f84814cfd134459569fdcbc4466e4ea76ed32))
*  calculate iteration ([9be91256](https://github.com/niallpaterson/sigma-calc/commit/9be9125657e36bc50d4bd0825385a134839be978))
*  perform operation ([2df3190d](https://github.com/niallpaterson/sigma-calc/commit/2df3190d46596d28acb60b4188b10eb8a9f4857b))
*  rename 'bodmasArray' ([a9f59b12](https://github.com/niallpaterson/sigma-calc/commit/a9f59b1262f49a163a9ca3ed611d85133c346f17))
*  replace narrowest operator search ([8074ffa3](https://github.com/niallpaterson/sigma-calc/commit/8074ffa382b13c6dc908d1adabfd5a76689b5941))
*  split big ops into own modules ([f0adad4b](https://github.com/niallpaterson/sigma-calc/commit/f0adad4b6098621634ef3a291a4d617e04a90faf))
*  remove unnecessary split utility ([3a5fc5a5](https://github.com/niallpaterson/sigma-calc/commit/3a5fc5a5b20c32fcdf49c3c811114bca5e28bad1))
*  rename 'units' folder 'utilities' ([104b5fdb](https://github.com/niallpaterson/sigma-calc/commit/104b5fdbab229879af69fac1be3565fe5ff454bd))
* **calculate:**
  *  rename, rmv boolean returns ([d7566207](https://github.com/niallpaterson/sigma-calc/commit/d7566207bdc25628fc5d3d52bf622f07e2adf7ee))
  *  rename 'performCalculation' ([c91b324d](https://github.com/niallpaterson/sigma-calc/commit/c91b324d4c7b8f97a0cb858028b5c4a109e62552))
* **inputparser:**
  *  make name concise ([3799c9bc](https://github.com/niallpaterson/sigma-calc/commit/3799c9bc8f23736d5b90d856fb1df048bc8042c5))
  *  rename => parse_input ([412a38b2](https://github.com/niallpaterson/sigma-calc/commit/412a38b27df79225a93f64ec87e35983866c9c50))
* **dominteraction:**  rename 'dom_utilities' ([a19342f5](https://github.com/niallpaterson/sigma-calc/commit/a19342f5e34506eedf9cea260f6a82a06ec0154c))
* **parseinput:**
  *  move utils to own directory ([7439508b](https://github.com/niallpaterson/sigma-calc/commit/7439508bd999c6cc490ea58c2e882a78b1447d36))
  *  'utilities' => 'parsers' ([3c70e302](https://github.com/niallpaterson/sigma-calc/commit/3c70e3025cbcc688bafe4f220820585791ea8f3c))
  *  rmv first index check ([6507111c](https://github.com/niallpaterson/sigma-calc/commit/6507111c28e834e6e02de5ac72c087f962a5c84a))
  *  use reduce + map ([4f9bbf18](https://github.com/niallpaterson/sigma-calc/commit/4f9bbf182aa40220a0677f64c7304d073487e2ae))
  *  use compose function ([9d6b1c89](https://github.com/niallpaterson/sigma-calc/commit/9d6b1c8935f02f34161039a9ea3e6c53da0ac856))
* **parseformula:**  make neg num more concise ([fbc92c92](https://github.com/niallpaterson/sigma-calc/commit/fbc92c92a812b12af5e3adbe175cce8078b78173))

##### Tests

*  update operations tests ([91c5e29b](https://github.com/niallpaterson/sigma-calc/commit/91c5e29b3ce5db3b3922f842f951613e8b75fc7c))
*  refactor, move tests to own folder ([e8773119](https://github.com/niallpaterson/sigma-calc/commit/e8773119671625e9641711f2ab58f6cd0d8ff33a))
*  add isValidResult tests ([83a845a5](https://github.com/niallpaterson/sigma-calc/commit/83a845a5a9f839f754420de4b85cbbce6722dbba))
* **parseinput:**  fix typo in test ([c3bdb3c9](https://github.com/niallpaterson/sigma-calc/commit/c3bdb3c97f6f1f8720d514cc1b3dbbb988e7c857))

### 1.2.0 (2020-06-26)

##### Refactors

*  Remove arrow block scope and rmv comment ([77eca956](https://github.com/niallpaterson/sigma-calc/commit/77eca956ff08b46f9de3daed6fa0e9ede6e1864d))
*  Remove block quotes around returning => ([1e7ce16f](https://github.com/niallpaterson/sigma-calc/commit/1e7ce16fe9c743df28a4bef331dec10153084650))

##### Code Style Changes

*  Add trailing space ([dfb2f729](https://github.com/niallpaterson/sigma-calc/commit/dfb2f7293a9ee76779bb9439884ada3a1cab602d))

##### Tests

*  Add replaceFormulaVariables test ([f4bc6a46](https://github.com/niallpaterson/sigma-calc/commit/f4bc6a468cdbf500878bfcb70f5159d72a344759))

### 1.1.0 (2020-06-23)

##### Build System / Dependencies

*  Remove unnecessary package-lock.json ([dd9a2f56](https://github.com/niallpaterson/sigma-calc/commit/dd9a2f56aabd4479fa09628f769e66d29d936cd1))
*  Remove unnecessary yarn.lock ([cfbe5254](https://github.com/niallpaterson/sigma-calc/commit/cfbe5254da2aa2eb3a756d02cb69645ecb8776bd))

##### New Features

*  Buttons highlight on click ([6ddbeee7](https://github.com/niallpaterson/sigma-calc/commit/6ddbeee7f289589a1c0ed2ee330c1d813b0343d7))

##### Bug Fixes

*  Exponentation returns NaN ([f7e03e18](https://github.com/niallpaterson/sigma-calc/commit/f7e03e18a0ffff3e495c0695c423a0e3917628ee))
*  Old delete btn element not removed ([56fa189c](https://github.com/niallpaterson/sigma-calc/commit/56fa189c44fde09930d0e7dab6fa6b819e5c4906))
*  Imports not updated ([84710468](https://github.com/niallpaterson/sigma-calc/commit/84710468e63988d70d799d15a4a01c6d63dc35ad))
*  File in incorrect directory ([262f7015](https://github.com/niallpaterson/sigma-calc/commit/262f701599ca59af48ce23a9dc75de42c2ee0d0b))
*  Remove duplicate file ([7405c225](https://github.com/niallpaterson/sigma-calc/commit/7405c225d30147324877498da68bfa543ec01300))
*  Brackets not removed properly around root ([f7d5115d](https://github.com/niallpaterson/sigma-calc/commit/f7d5115dcdddf17297270a2d2c5c8dc45cd8280b))
*  Incorrect pi symbol in antecedent ([de5dc796](https://github.com/niallpaterson/sigma-calc/commit/de5dc7961635426f17690f0260fbb06a1cb83fad))
*  Import errors ([caf32241](https://github.com/niallpaterson/sigma-calc/commit/caf322417f97d433e768ac53fcf8d227326ecf5e))

##### Other Changes

*  Remove unnecessary yarn.lock" ([1e26abbf](https://github.com/niallpaterson/sigma-calc/commit/1e26abbfdf916e566407ffcb0d68fd1b334e3f63))

##### Refactors

*  Destructure elements import ([d76728a6](https://github.com/niallpaterson/sigma-calc/commit/d76728a61222d744ce82762247846cc755a8fa9f))
*  Major rework - ([ce95a64e](https://github.com/niallpaterson/sigma-calc/commit/ce95a64eb4fb92a74c38e575489b2e556453908f))
*  Make isNumeralString func one liner ([41cd022a](https://github.com/niallpaterson/sigma-calc/commit/41cd022a0aa068cdf0b7002694b359de0c5a1723))

##### Code Style Changes

*  Organise file structure ([6c9fdb7d](https://github.com/niallpaterson/sigma-calc/commit/6c9fdb7d12b62840a61002e867e56f9d5c1ae507))

##### Tests

*  Move all unit tests beside tested unit ([df944bcf](https://github.com/niallpaterson/sigma-calc/commit/df944bcf78ee80d427039bc90e1b0ad6865686ac))

#### 1.0.0 (2020-06-08)

##### Build System / Dependencies

*  Update scss output ([dbcad7b1](https://github.com/niallpaterson/sigma-calc/commit/dbcad7b1a1c7066540a57470fe022a60517ffce3))
*  Update css output ([02d5f13a](https://github.com/niallpaterson/sigma-calc/commit/02d5f13a2dad0f19f216322410f97bab6a337f40))

##### Chores

*  Update imports ([0d7c65d5](https://github.com/niallpaterson/sigma-calc/commit/0d7c65d51bc52d6255c684da6c73e319646e5f44))

##### New Features

*  Replace limit input placeholders with values ([7658425f](https://github.com/niallpaterson/sigma-calc/commit/7658425f6d9d2f46953615ac2fb5b693e62d9e5d))
*  User can use i variable from lowerlimit ([e04321cf](https://github.com/niallpaterson/sigma-calc/commit/e04321cfda5fff97fe2850cf849ea279fb6a00be))
*  Sigma active is initial setting ([3d24afc0](https://github.com/niallpaterson/sigma-calc/commit/3d24afc01e4a824003817208e83121a0eee65871))
*  Add big notation functionality ([6e697b14](https://github.com/niallpaterson/sigma-calc/commit/6e697b147b76c686860bcad746ad1098de764315))
*  Replace limit placeholders with labels ([cde0728c](https://github.com/niallpaterson/sigma-calc/commit/cde0728c17b2ac2d555f43e97fdbbc80b9e4bd58))
*  Change scss names for formula wrapper ([4cea512a](https://github.com/niallpaterson/sigma-calc/commit/4cea512aeea56c658bd04521343779123ae725c0))
*  Add formula wrapper ([5868dc00](https://github.com/niallpaterson/sigma-calc/commit/5868dc00bf2fd1601dec7e929f6fa282cc195c37))
*  Style big notation input ([4f22e3a7](https://github.com/niallpaterson/sigma-calc/commit/4f22e3a7fdc46752f9e01f1da91ae223bacb986a))
*  Add bigoperator input elements ([f688d1ba](https://github.com/niallpaterson/sigma-calc/commit/f688d1ba3ca394d3d40d2cd725af0398ef60805a))
*  Add bignotation methods ([8b139e2b](https://github.com/niallpaterson/sigma-calc/commit/8b139e2b2a5aab97b6cc9292805582e551ecaad3))
*  Add isNumeralString function ([a9942a07](https://github.com/niallpaterson/sigma-calc/commit/a9942a07a81a793878f6d37d35d63aee28b3fc51))
*  Add output validity checker func ([c2d43e90](https://github.com/niallpaterson/sigma-calc/commit/c2d43e90dea2ae3bebaeb5c64a1f4a7013f4f049))
*  Pass empty LHS parameter to square root ([14c38418](https://github.com/niallpaterson/sigma-calc/commit/14c384186df1610e85e0dd74c8cfeefaf0667d1a))
*  Add negative number inverter function ([6ad21cd4](https://github.com/niallpaterson/sigma-calc/commit/6ad21cd49feff7ac2535dc492b53304640366632))
*  Add bodmas array ([5de26e8e](https://github.com/niallpaterson/sigma-calc/commit/5de26e8ece7b02afd9d1505cd0aef18ffad17095))
*  Add exponent +  square root to operator check ([0e5d7882](https://github.com/niallpaterson/sigma-calc/commit/0e5d78823a9e646820ed4ab69060f5c5388f4ef2))
*  Add unary operators object ([a3e9cce2](https://github.com/niallpaterson/sigma-calc/commit/a3e9cce2d0ef4127e4816cf7feae8fbfec677306))
*  Add exponent binary operator ([2d76f141](https://github.com/niallpaterson/sigma-calc/commit/2d76f14197e3164a979e265ff7291673e1fd3d76))

##### Bug Fixes

*  Import typo ([8c8e22e4](https://github.com/niallpaterson/sigma-calc/commit/8c8e22e4c8160a58f55d9fdbfa4c1b826aa63dfa))
*  BigOperator buttons do not display operators ([e6f6955a](https://github.com/niallpaterson/sigma-calc/commit/e6f6955ace97e21c7865b1c78bb90a9e753968e9))
*  Click events change textcontent, not value ([f77b09c8](https://github.com/niallpaterson/sigma-calc/commit/f77b09c8fb9d61d87bdb70b45f8f8c6815b2842c))
*  Forgot to call big op event listener on load ([16482017](https://github.com/niallpaterson/sigma-calc/commit/16482017c35bf5e37088fd108894c1dbdad8d2b6))
*  Incorrect query selector for big ops ([e590aea4](https://github.com/niallpaterson/sigma-calc/commit/e590aea4b3740796e435d4b429747b35ff4419f5))
*  Can output negative 0 ([a875002f](https://github.com/niallpaterson/sigma-calc/commit/a875002f973d9bb7317c82a1e997b42673ddc755))
*  Square root uses incorrect paramater ([b995164a](https://github.com/niallpaterson/sigma-calc/commit/b995164a089a3eb065e25a972267d4e6e509c4db))
*  Comment typo ([049a7bc6](https://github.com/niallpaterson/sigma-calc/commit/049a7bc69df68ef9905b0b939b9c949438a972c2))

##### Other Changes

*  Replace limit divs with inputs ([9367f41b](https://github.com/niallpaterson/sigma-calc/commit/9367f41b9eefbcb87106b05d5d4d7bdbaf7b3088))
*  Old test files ([0a28ce8e](https://github.com/niallpaterson/sigma-calc/commit/0a28ce8e84032fbcfa0460ed9b47959c7570c659))
*  Deleted file ([86b76db5](https://github.com/niallpaterson/sigma-calc/commit/86b76db517c348e962299066f829fbefdae6ae20))
*  No separation of binary, unary operators ([ac79ee20](https://github.com/niallpaterson/sigma-calc/commit/ac79ee20185f22ca5fb28899b254b5aa542d7b7f))
*  Replace exponent symbol w/ double asterix ([529cf9e5](https://github.com/niallpaterson/sigma-calc/commit/529cf9e5daec924fb4d02e5610aae45a66801a2d))
*  widests/narrowest ([935531bb](https://github.com/niallpaterson/sigma-calc/commit/935531bb4b04d0f624a3245290a976669600bad6))

##### Refactors

*  Unify multiple bigOp parsers ([97500314](https://github.com/niallpaterson/sigma-calc/commit/97500314b297ddb0437a117bb7d1c58ef65bca25))
*  Now handles bodmas correctly ([83360672](https://github.com/niallpaterson/sigma-calc/commit/83360672dd748ebe0be09677c686ba861f3c9707))
*  Move digit joiner from numeral parser ([b6a8d0b7](https://github.com/niallpaterson/sigma-calc/commit/b6a8d0b79ac209ba4d64255bfee0c176e7431f63))
*  Update event listeners ([adcac9d6](https://github.com/niallpaterson/sigma-calc/commit/adcac9d69a3eed6af879292a8d9a296f99c63ba5))
*  Make multidigit numeral join func pure ([ed44d263](https://github.com/niallpaterson/sigma-calc/commit/ed44d263cf8e1d42251bdb87f9418270f417882d))
*  Depluralise name ([a2839731](https://github.com/niallpaterson/sigma-calc/commit/a2839731e8ba96144c063e94fe1331cd3fa7e808))
*  Works for unary and binary operators ([14f80dd7](https://github.com/niallpaterson/sigma-calc/commit/14f80dd765d197e43fa1ad6eb42c0a90a7bc85fe))
*  Rename scoping bracket counter params ([46a9ff04](https://github.com/niallpaterson/sigma-calc/commit/46a9ff04ae61aea6bb18d9dd6dcd82a4cc86268d))
*  Get indexes of all narrowest scope ops ([eeedaf8f](https://github.com/niallpaterson/sigma-calc/commit/eeedaf8f3404787c4d588e5c484eb7148ff8ecaa))
*  Operator checker checks operator object ([01894b6e](https://github.com/niallpaterson/sigma-calc/commit/01894b6e5e6916f343e9bff048de97f0bf6af645))

##### Code Style Changes

*  Remove double newline ([8a0f4e84](https://github.com/niallpaterson/sigma-calc/commit/8a0f4e84da39caca2262ae6cd57f711cf2bb3d08))

##### Tests

*  Add tests for bracketed formulae ([c5eaab1e](https://github.com/niallpaterson/sigma-calc/commit/c5eaab1e65939ea8b19957d06f6a9f115ac459dd))
*  Add invalid input tests for pi notation ([036e0d9a](https://github.com/niallpaterson/sigma-calc/commit/036e0d9a35638a6934ce59e33c45ca33ec7bfe39))
*  Add error tests for sigma notation ([c54c3c76](https://github.com/niallpaterson/sigma-calc/commit/c54c3c768ad1601fd066ad9b17b30823b93907da))
*  Add unit tests for sigma notation, addition ([0778576a](https://github.com/niallpaterson/sigma-calc/commit/0778576a9b97027cafbae77c4c3bc9fa93f30ad7))
*  Add tests for bodmas formulae ([9da1715a](https://github.com/niallpaterson/sigma-calc/commit/9da1715a34013e6e73a5c431dcf17c55d7995e05))
*  Add multidigit func unit tests ([f7230bcc](https://github.com/niallpaterson/sigma-calc/commit/f7230bcc005338e52a07929f7ca850ccaf4461d3))
*  Add tests for output validity checker ([085e30e5](https://github.com/niallpaterson/sigma-calc/commit/085e30e5221a9e30efe4db86a2902502a68e6f66))
*  Add  operator tests; new tests for exp/sqrt ([2928236c](https://github.com/niallpaterson/sigma-calc/commit/2928236c88b15627a3e0f026663791d7ccf45d8b))
*  Add tests for negative number inverter ([817bebb9](https://github.com/niallpaterson/sigma-calc/commit/817bebb93e7eb5e32989047007d9e40daf66ad81))
*  Rename test files ([6a116c54](https://github.com/niallpaterson/sigma-calc/commit/6a116c54bab6eacf6c1647502fc52ac07d46706a))
*  Add tests for exponentation and square root ([8e5c8234](https://github.com/niallpaterson/sigma-calc/commit/8e5c8234f939f8140b5a4de1b75791e2e806f890))
*  Add invalid input tests ([6b6c8314](https://github.com/niallpaterson/sigma-calc/commit/6b6c8314aa16e417de1ee88e560a3b4d465eff2d))

