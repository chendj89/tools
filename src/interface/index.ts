import type { DefineComponent, App } from "vue";
declare global {
  /**
   * 用户
   */
  interface IUser {
    /**
     * 用户名
     */
    username: string;
    /**
     * 密码
     */
    pwd: string;
  }
  /**
   * vite插件用户输入参数
   */
  type TUserOptions = Partial<
    {
      /**
       * 文件结尾
       */
      endsWith: string;
      alias: Record<string, string>;
    } & MergeExclusive<
      {
        /**
         * 包含路径
         */
        include: string[];
      },
      {
        /**
         * 排除路径
         */
        exclude: string[];
      }
    >
  >;
  /**
   * VUE单文件组件类型
   */
  type Component = DefineComponent<{}, {}, any>;
}

export {};
