export type FirstCharToUppercase<T extends string> = T extends `a${infer U}`
  ? `A${U}`
  : T extends `b${infer U}`
  ? `B${U}`
  : T extends `c${infer U}`
  ? `C${U}`
  : T extends `d${infer U}`
  ? `D${U}`
  : T extends `e${infer U}`
  ? `E${U}`
  : T extends `f${infer U}`
  ? `F${U}`
  : T extends `g${infer U}`
  ? `G${U}`
  : T extends `h${infer U}`
  ? `H${U}`
  : T extends `i${infer U}`
  ? `I${U}`
  : T extends `j${infer U}`
  ? `J${U}`
  : T extends `k${infer U}`
  ? `K${U}`
  : T extends `l${infer U}`
  ? `L${U}`
  : T extends `m${infer U}`
  ? `M${U}`
  : T extends `n${infer U}`
  ? `N${U}`
  : T extends `o${infer U}`
  ? `O${U}`
  : T extends `p${infer U}`
  ? `P${U}`
  : T extends `q${infer U}`
  ? `Q${U}`
  : T extends `r${infer U}`
  ? `R${U}`
  : T extends `s${infer U}`
  ? `S${U}`
  : T extends `t${infer U}`
  ? `T${U}`
  : T extends `u${infer U}`
  ? `U${U}`
  : T extends `v${infer U}`
  ? `V${U}`
  : T extends `w${infer U}`
  ? `W${U}`
  : T extends `x${infer U}`
  ? `X${U}`
  : T extends `y${infer U}`
  ? `Y${U}`
  : T extends `z${infer U}`
  ? `Z${U}`
  : never;
