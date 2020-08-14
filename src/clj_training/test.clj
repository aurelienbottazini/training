(ns clj-training.test)
(def plays [{:band "Burial", :plays 979, :loved 9}
            {:band "Eno", :plays 2333, :loved 15} {:band "Bill Evans", :plays 979, :loved 9} {:band "Magma", :plays 2665, :loved 31}])

(defn columns [column-names]
      (fn [row]
            (vec (map row column-names)))
      )

(sort-by (columns [:plays :loved :band]) plays)
