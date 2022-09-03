declare global {
  type Without<FirstType, SecondType> = {
    [KeyType in Exclude<keyof FirstType, keyof SecondType>]?: never;
  };
  /**
   * 二选一
   */
  type MergeExclusive<FirstType, SecondType> =
    | FirstType
    | SecondType extends object
    ?
        | (Without<FirstType, SecondType> & SecondType)
        | (Without<SecondType, FirstType> & FirstType)
    : FirstType | SecondType;
}

export {};
