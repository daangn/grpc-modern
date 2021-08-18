export type FirstCharToLowercase<T extends string> = T extends `A${infer U}`
  ? `a${U}`
  : T extends `B${infer U}`
  ? `b${U}`
  : T extends `C${infer U}`
  ? `c${U}`
  : T extends `D${infer U}`
  ? `d${U}`
  : T extends `E${infer U}`
  ? `e${U}`
  : T extends `F${infer U}`
  ? `f${U}`
  : T extends `G${infer U}`
  ? `g${U}`
  : T extends `H${infer U}`
  ? `h${U}`
  : T extends `I${infer U}`
  ? `i${U}`
  : T extends `J${infer U}`
  ? `j${U}`
  : T extends `K${infer U}`
  ? `k${U}`
  : T extends `L${infer U}`
  ? `l${U}`
  : T extends `M${infer U}`
  ? `m${U}`
  : T extends `N${infer U}`
  ? `n${U}`
  : T extends `O${infer U}`
  ? `o${U}`
  : T extends `P${infer U}`
  ? `p${U}`
  : T extends `Q${infer U}`
  ? `q${U}`
  : T extends `R${infer U}`
  ? `r${U}`
  : T extends `S${infer U}`
  ? `s${U}`
  : T extends `T${infer U}`
  ? `t${U}`
  : T extends `U${infer U}`
  ? `u${U}`
  : T extends `V${infer U}`
  ? `v${U}`
  : T extends `W${infer U}`
  ? `w${U}`
  : T extends `X${infer U}`
  ? `x${U}`
  : T extends `Y${infer U}`
  ? `y${U}`
  : T extends `Z${infer U}`
  ? `z${U}`
  : never;
