import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { generateBlurImageDataUrl } from './optimize/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export interface WindowDimentions {
  width: number;
  height: number;
}
export interface WindowEvent<TypeMessageKey, IData> extends Event {
  data: WindowEventData<TypeMessageKey, IData>;
}
export interface WindowEventData<TypeMessageKey, IData> {
  key: TypeMessageKey;
  data: IData;
}

export interface INotice {
  title?: string;
  body?: string;
}

export interface IUtils {
  useDidMount: (
    didMount: React.EffectCallback,
    didUnmount?: React.EffectCallback,
    deps?: React.DependencyList
  ) => void;
  useReducer: <T>(
    reducer: (state: T, newState: T) => T,
    initialState?: T
  ) => [T, React.Dispatch<T>];
  useDebounce: <T>(
    value: T,
    delay: number,
    callback: (value?: T) => Promise<void> | void
  ) => void;
  blurImage: (url: string) => Promise<string>;
  useCustomRouter: () => void;
  generateRating: (rating: number) => React.JSX.Element;
}
const Utils: IUtils = {
  useDidMount: (
    didMount: React.EffectCallback,
    didUnmount?: React.EffectCallback,
    deps?: React.DependencyList
  ) => {
    React.useEffect(() => {
      if (didMount) didMount();

      return () => {
        if (didUnmount) didUnmount();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps ?? []);
  },
  useReducer: function <T>(
    reducer: (state: T, newState: T) => T,
    initialState?: T
  ) {
    return React.useReducer(reducer, initialState ?? (undefined as T));
  },
  useDebounce: function <T>(
    value: T,
    delay: number,
    callback: (value?: T) => Promise<void> | void
  ) {
    const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

    React.useEffect(() => {
      const handler = setTimeout(async () => {
        setDebouncedValue(value);
        await callback(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, delay]);

    return debouncedValue;
  },
  blurImage: async (url: string) => generateBlurImageDataUrl(url),
  useCustomRouter: function () {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query: { search?: string; sort?: string } = {
      search: '',
      sort: ''
    };

    const search = searchParams.get('search');
    const sort = searchParams.get('sort');

    if (search) query.search = search;
    if (sort) query.sort = sort;

    const pushQuery = ({ search, sort }: { search: string; sort: string }) => {
      if (search !== undefined) {
        search === '' ? delete query.search : (query.search = search);
      }
      if (sort !== undefined) {
        sort === 'createdAt' ? delete query.sort : (query.sort = sort);
      }
      const newQuery = new URLSearchParams(query).toString();
      router.push(`?${newQuery}`);
    };
    return { pushQuery, query };
  },
  generateRating: (rating: number) => {
    const stars = Array(5)
      .fill(0)
      .map((_, idx) => (
        <div key={idx} className="text-[20px] text-[#FF9529]">
          {idx < rating ? <AiFillStar /> : <AiOutlineStar />}
        </div>
      ));
    return <div className="flex gap-1">{stars}</div>;
  }
};

export default Utils;
