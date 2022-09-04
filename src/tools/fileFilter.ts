/**
 * 文件过滤
 * @param id 文件路径
 * @param opts
 * @param opts.endsWith 文件结尾
 * @param opts.include 包含路径
 * @param opts.exclude 排除路径
 * @returns boolean 是否过滤
 */
export default function fileFilter(id: string, opts: TUserOptions): boolean {
  // 结尾不匹配，返回false
  if (opts.endsWith) {
    if (!id.includes(opts.endsWith)) {
      return false;
    }
  }
  if (opts.include) {
    // 满足一个即为true
    let result = opts.include.some((item) => {
      return id.includes(item);
    });
    return result;
  }
  if (opts.exclude) {
    // 满足一个即为true
    let result = opts.exclude.some((item) => {
      return id.includes(item);
    });
    // 取反
    return !result;
  }
  return true;
}
export * from "../interface/index";
export * from "../interface/union";
